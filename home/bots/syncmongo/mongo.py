import json
import random
import string
from typing import List
from datetime import datetime
import paho.mqtt.client as mqtt
import pymongo
import pymongo.database
import pymongo.collection
import pymongo.errors
import threading
import os
#libreria mails
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from weatherApiClient import willRainInNextHours

MONGO_URI = "mongodb+srv://admin:O3ByoOtAKMH01ZrM@sistemergentes.slhwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  # mongodb://user:pass@ip:port || mongodb://ip:port
#MONGO_URI = "mongodb://127.0.0.1:27017"
MONGO_DB = "domotica"
MONGO_TIMEOUT = 1  # Time in seconds
MONGO_DATETIME_FORMAT = "%d/%m/%Y %H:%M:%S"

MONGO_URI = os.getenv("MONGO_URI", MONGO_URI)
MONGO_DB = os.getenv("MONGO_DB", MONGO_DB)
MONGO_TIMEOUT = float(os.getenv("MONGO_TIMEOUT", MONGO_TIMEOUT))
MONGO_DATETIME_FORMAT = os.getenv("MONGO_DATETIME_FORMAT", MONGO_DATETIME_FORMAT)
STATUS = 1 # 0 apagado/1 encendido/2 error

with open("config.json") as config_file:
    config = json.load(config_file)

DASHBOARD_URL = config["dashboardUrl"]
mail_config = config["mail"]
MAIL_USER = mail_config["user"]
MAIL_PASSWORD = mail_config["password"]
MAIL_SUBJECT = mail_config["mailSubject"]

def mandarMail(mensaje):
    # create message object instance
    mail = MIMEMultipart()
    message = "Sistema Robot le informa "    
    password = MAIL_PASSWORD
    mail['From'] = MAIL_USER
    mail['To'] = MAIL_USER
    mail['Subject'] = MAIL_SUBJECT
    # add in the message body
    mail.attach(MIMEText(message, 'plain'))
    #create server
    server = smtplib.SMTP('smtp.gmail.com: 587')
    server.starttls()
    # Login Credentials for sending the mail
    server.login(mail['From'], password)    
    mail.attach(MIMEText(mensaje, 'plain'))    
    mail.attach(MIMEText(f'<a href="{DASHBOARD_URL}">Enlace al dashboard</a>','html'))
    # send the message via the server.
    server.sendmail(mail['From'], mail['To'], mail.as_string())
    server.quit()
    print ("successfully sent email to %s:" % (mail['To']))
    del message
    del mail
    del server

mqtt_config = config["mqtt"]

MQTT_BROKER = mqtt_config["broker"]
#MQTT_BROKER = "test.mosquitto.org"
MQTT_PORT = mqtt_config["tcpPort"]
#MQTT_PORT = 1883
MQTT_KEEPALIVE = 60
MQTT_QOS = 2
MQTT_USERNAME = mqtt_config["username"]
MQTT_PASSWORD = mqtt_config["password"]

limites_config = config["limites"]

LIMITE_TEMPERATURA = limites_config["temperatura"]
LIMITE_HUMEDAD = limites_config["humedad"]
LIMITE_HUMO = limites_config["humo"]
LIMITE_MONOXIDO = limites_config["monoxido"]
LIMITE_HORAS_LLUVIA = limites_config["horasLluvia"]

TIPO_TEMPERATURA = 'TEMPERATURA'
TIPO_LUZ = 'LUZ'
TIPO_VENTILADOR = 'VENTILADOR'
TIPO_HUMEDAD = 'HUMEDAD'
TIPO_MONOXIDO = 'MONOXIDO'
TIPO_HUMO = 'HUMO'

def connect_mqtt():
    def on_connect(client, userdata, flags, returnCode):
        if returnCode == 0:
            print("Connected to MQQT Broker!")
        else:
            print("Failed to connect %d\n", returnCode)

    client_id = f'python-mqtt-{random.randint(0, 1000)}'

    # Set Connecting Client ID
    client = mqtt.Client(client_id)
    client.username_pw_set(MQTT_USERNAME, MQTT_PASSWORD)
    client.on_connect = on_connect
    client.connect(MQTT_BROKER, MQTT_PORT)
    return client

class Mongo(object):
    def __init__(self):
        self.client: pymongo.MongoClient = None
        self.database: pymongo.database.Database = None
        self.collection: pymongo.collection.Collection = None
        self.queue: List[mqtt.MQTTMessage] = list()
        self.mqttClient = connect_mqtt()

    def connect(self):
        print("Connecting Mongo")
        self.client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=MONGO_TIMEOUT*1000.0)
        self.database = self.client.get_database(MONGO_DB)

    def disconnect(self):
        print("Disconnecting Mongo")
        if self.client:
            self.client.close()
            self.client = None

    def connected(self) -> bool:
        if not self.client:
            return False
        try:
            self.client.admin.command("ismaster")
        except pymongo.errors.PyMongoError:
            return False
        else:
            return True

    def _enqueue(self, msg: mqtt.MQTTMessage):
        print("Enqueuing")
        self.queue.append(msg)
        # TODO process queue

    def __store_thread_f(self, msg: mqtt.MQTTMessage):
        print("Storing")
        now = datetime.now()

        payloadJson = json.loads(msg.payload)

        self.collection = self.determineCollection(msg)

        tipoMensaje = payloadJson["tipo"]
        valueMensaje = payloadJson["value"]

        if(tipoMensaje == TIPO_TEMPERATURA):
            if(valueMensaje >= LIMITE_TEMPERATURA):
                self.publishVentilador(valueMensaje)
        
        if(tipoMensaje == TIPO_HUMEDAD):
            self.procesarHumedad(valueMensaje)
        
        if(tipoMensaje == TIPO_HUMO):
            self.procesarHumo(valueMensaje)
            
        if(tipoMensaje == TIPO_MONOXIDO):
            self.procesarMonoxido(valueMensaje)

        status = determineStatus(tipoMensaje, valueMensaje)

        try:
            document = {
                "topic": msg.topic,
                "value": payloadJson["value"],
                "qos": msg.qos,
                "status": status,
                "timestamp": int(now.timestamp()),
                "datetime": now.strftime(MONGO_DATETIME_FORMAT)
            }

            result = self.collection.insert_one(document)
            print("Saved in Mongo document ID", result.inserted_id)
        except Exception as ex:
            print(ex)

    def _store(self, msg):
        th = threading.Thread(target=self.__store_thread_f, args=(msg,))
        th.daemon = True
        th.start()

    def determineCollection(self, msg: mqtt.MQTTMessage):
        return self.database.get_collection(msg.topic)

    def procesarHumedad(self, humedad: float):
        topic = f'casa/exterior/regador'
        if(humedad == 0):
            vaALlover = willRainInNextHours(LIMITE_HORAS_LLUVIA)
            if(not vaALlover):
                self.mqttClient.publish(topic, buildJsonMessage(0, 'REGADOR', 1))
                return

        self.mqttClient.publish(topic, buildJsonMessage(0, 'REGADOR', 0))

    def procesarHumo(self, value: float):
        topic = f'casa/interior/cocina/alarma'
        if(value >= LIMITE_HUMO):
            self.mqttClient.publish(topic, buildJsonMessage(0, 'ALARMA', 1))
            mandarMail("Humo Detectado "+ str(value))

    def procesarMonoxido(self, value: float):
        topic = f'casa/interior/cocina/alarma'
        if(value >= LIMITE_MONOXIDO):
            self.mqttClient.publish(topic, buildJsonMessage(0, 'ALARMA', 1))
            mandarMail("Monóxido Detectado "+ str(value))

    def publishVentilador(self, numAmbiente: int):
        topic = f'casa/interior/ambiente{numAmbiente}/ventilador'
        self.mqttClient.publish(topic, buildJsonMessage(numAmbiente, 'VENTILADOR', 1))

    def save(self, msg: mqtt.MQTTMessage):
        print("Saving")
        if msg.retain:
            print("Skipping retained message")
            return
        if self.connected():
            self._store(msg)
        else:
            self._enqueue(msg)

def determineStatus(tipoMensaje: string, value: float):
    if(tipoMensaje == TIPO_LUZ or tipoMensaje == TIPO_VENTILADOR):
        return value
    elif(tipoMensaje == TIPO_TEMPERATURA):
        if(value > LIMITE_TEMPERATURA):
            return 1
        else:
            return 0

def buildJsonMessage(numAmbiente: int, tipo: string, value: None):
    msg = {}
    msg["ambiente"] = numAmbiente
    msg["tipo"] = tipo
    msg["value"] = value if value else random.randint(0, 1)
    
    return json.dumps(msg)