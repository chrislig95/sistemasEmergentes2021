from typing import List
from datetime import datetime
import paho.mqtt.client as mqtt
import pymongo
import pymongo.database
import pymongo.collection
import pymongo.errors
import threading
import os
from re import search
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
'''
# create message object instance
mail = MIMEMultipart()
message = "Sistema Robot le informa "
# setup the parameters of the message
password = "3mer63ntes"
mail['From'] = "sistemas.emergentes2021@gmail.com"
mail['To'] = "sistemas.emergentes2021@gmail.com"
mail['Subject'] = "SUPER SISTEMA ROBOT"
# add in the message body
mail.attach(MIMEText(message, 'plain'))
#create server
server = smtplib.SMTP('smtp.gmail.com: 587')
server.starttls()
# Login Credentials for sending the mail
server.login(mail['From'], password)
'''



class Mongo(object):
    def __init__(self):
        self.client: pymongo.MongoClient = None
        self.database: pymongo.database.Database = None
        self.collection: pymongo.collection.Collection = None
        self.queue: List[mqtt.MQTTMessage] = list()

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

    def _enqueue(self, msg: mqtt.MQTTMessage):
        print("Enqueuing")
        self.queue.append(msg)
        # TODO process queue

    def __store_thread_f(self, msg: mqtt.MQTTMessage):
        print("Storing")
        now = datetime.now()
        interiorHumo = "humo"
        interiorMonoxido = "monoxido"
        interiorAlarma = "interior/actuadores/alarma"
        interiorLuces = "interior/actuadores/luces"
        exteriorAlarma = "exterior/actuadores/alarma"
        exteriorLuces = "exterior/actuadores/luces"
        exteriorLuzSolar = "luzsolar"
        exteriorRiego = "riego"
        exteriorTemperatura = "temperatura"

        if search(interiorHumo, msg.topic):
            #print(MONGO_COLLECTION)
            print("Humo Detectado")
            self.collection = self.database.get_collection("interiorHumo")
            alerta=msg.payload.decode()
            if alerta == "1":
                # create message object instance
                mail = MIMEMultipart()
                message = "Sistema Robot le informa "
                # setup the parameters of the message
                password = "3mer63ntes"
                mail['From'] = "sistemas.emergentes2021@gmail.com"
                mail['To'] = "sistemas.emergentes2021@gmail.com"
                mail['Subject'] = "SUPER SISTEMA ROBOT"
                # add in the message body
                mail.attach(MIMEText(message, 'plain'))
                #create server
                server = smtplib.SMTP('smtp.gmail.com: 587')
                server.starttls()
                # Login Credentials for sending the mail
                server.login(mail['From'], password)
                message = "Humo Detectado"
                mail.attach(MIMEText(message, 'plain'))
                # send the message via the server.
                server.sendmail(mail['From'], mail['To'], mail.as_string())
                server.quit()
                print ("successfully sent email to %s:" % (mail['To']))
                del message
                del mail
                del server
        if search(interiorMonoxido, msg.topic):
            print("Monoxido Detectado")
            self.collection = self.database.get_collection("interiorMonoxido")
        if search(interiorAlarma, msg.topic):
            print("Interior Alarma Detectado")
            self.collection = self.database.get_collection("interiorAlarma")
        if search(interiorLuces, msg.topic):
            print("Interior Luces Detectado")
            self.collection = self.database.get_collection("interiorLuces")
        if search(exteriorAlarma, msg.topic):
            print("Exterior Alarma Detectado")
            self.collection = self.database.get_collection("exteriorAlarma")
        if search(exteriorLuces, msg.topic):
            print("Exterior Luces Detectado")
            self.collection = self.database.get_collection("exteriorLuces")
        if search(exteriorLuzSolar, msg.topic):
            print("Exterior Luz Solar Detectado")
            self.collection = self.database.get_collection("exteriorLuzSolar")
        if search(exteriorRiego, msg.topic):
            print("Exterior Riego")
            self.collection = self.database.get_collection("exteriorRiego")
        if search(exteriorTemperatura, msg.topic):
            print("Exterior Temperatura")
            self.collection = self.database.get_collection("exteriorTemperatura")
        
        try:
            document = {
                "topic": msg.topic,
                "value": msg.payload.decode(),
                # "retained": msg.retain,
                "qos": msg.qos,
                "status": STATUS,
                "timestamp": int(now.timestamp()),
                "datetime": now.strftime(MONGO_DATETIME_FORMAT),
                # TODO datetime must be fetched right when the message is received
                # It will be wrong when a queued message is stored
            }
            
            result = self.collection.insert_one(document)
            print("Saved in Mongo document ID", result.inserted_id)
            if not result.acknowledged:
                # Enqueue message if it was not saved properly
                self._enqueue(msg)
        except Exception as ex:
            print(ex)

    def _store(self, msg):
        th = threading.Thread(target=self.__store_thread_f, args=(msg,))
        th.daemon = True
        th.start()

    def save(self, msg: mqtt.MQTTMessage):
        print("Saving")
        if msg.retain:
            print("Skipping retained message")
            return
        if self.connected():
            self._store(msg)
        else:
            self._enqueue(msg)
