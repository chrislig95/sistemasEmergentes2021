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

MONGO_URI = "mongodb+srv://admin:O3ByoOtAKMH01ZrM@sistemergentes.slhwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  # mongodb://user:pass@ip:port || mongodb://ip:port
#MONGO_URI = "mongodb://127.0.0.1:27017"
MONGO_DB = "domotica"
#MONGO_COLLECTION = "mqtt"
MONGO_TIMEOUT = 1  # Time in seconds
MONGO_DATETIME_FORMAT = "%d/%m/%Y %H:%M:%S"

MONGO_URI = os.getenv("MONGO_URI", MONGO_URI)
MONGO_DB = os.getenv("MONGO_DB", MONGO_DB)
#MONGO_COLLECTION = os.getenv("MONGO_COLLECTION", MONGO_COLLECTION)
MONGO_TIMEOUT = float(os.getenv("MONGO_TIMEOUT", MONGO_TIMEOUT))
MONGO_DATETIME_FORMAT = os.getenv("MONGO_DATETIME_FORMAT", MONGO_DATETIME_FORMAT)
STATUS = 1 # 0 apagado/1 encendido/2 error

def mandarMail(mensaje):
    # create message object instance
    mail = MIMEMultipart()
    message = "Sistema Robot le informa "
    # setup the parameters of the message
    #password = "3mer63ntes"
    #mail['From'] = "sistemas.emergentes2021@gmail.com"
    #mail['To'] = "sistemas.emergentes2021@gmail.com"
    password = "Usal2021"
    mail['From'] = "sistemasemergentes2@gmail.com"
    mail['To'] = "sistemasemergentes2@gmail.com"
    mail['Subject'] = "SUPER SISTEMA ROBOT"
    # add in the message body
    mail.attach(MIMEText(message, 'plain'))
    #create server
    server = smtplib.SMTP('smtp.gmail.com: 587')
    server.starttls()
    # Login Credentials for sending the mail
    server.login(mail['From'], password)
    #mensaje = ("Humo Detectado " + str(alerta))
    mail.attach(MIMEText(mensaje, 'plain'))
    # send the message via the server.
    server.sendmail(mail['From'], mail['To'], mail.as_string())
    server.quit()
    print ("successfully sent email to %s:" % (mail['To']))
    del message
    del mail
    del server


# username = mqtt_config["username"]
# password = mqtt_config["password"]

MQTT_BROKER = "192.241.178.194"
#MQTT_BROKER = "test.mosquitto.org"
MQTT_PORT = 2096
#MQTT_PORT = 1883
MQTT_KEEPALIVE = 60
MQTT_QOS = 2

LIMITE_TEMPERATURA = 25

TIPO_TEMPERATURA = 'TEMPERATURA'
TIPO_LUZ = 'LUZ'
TIPO_VENTILADOR = 'VENTILADOR'

def connect_mqtt():
    def on_connect(client, userdata, flags, returnCode):
        if returnCode == 0:
            print("Connected to MQQT Broker!")
        else:
            print("Failed to connect %d\n", returnCode)

    client_id = f'python-mqtt-{random.randint(0, 1000)}'

    # Set Connecting Client ID
    client = mqtt.Client(client_id)
    #client.username_pw_set(username, password)
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
        #self.collection = self.database.get_collection(MONGO_COLLECTION)

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

    def __store_thread_f(self, msg: mqtt.MQTTMessage):
        print("Storing")
        now = datetime.now()

        payloadJson = json.loads(msg.payload)

        self.collection = self.determineCollection(msg)

        tipoMensaje = payloadJson["tipo"]
        valueMensaje = payloadJson["value"]
        if(tipoMensaje == 'TEMPERATURA'):
            temperatura = payloadJson["value"]
            if(temperatura >= LIMITE_TEMPERATURA):
                self.publishVentilador(payloadJson["ambiente"])

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