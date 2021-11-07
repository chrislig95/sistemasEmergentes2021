import os
import random
import ssl
import string
from flask import Flask, request, jsonify
from flask_cors import CORS
import paho.mqtt.client as mqtt
import json
import logging
from logging.handlers import TimedRotatingFileHandler

logname = "sist_emergentes_api.log"
log_format = '%(asctime)s -%(levelname)s - %(message)s'

logger = logging.getLogger('simple')
logger.setLevel(logging.INFO)
handler = TimedRotatingFileHandler(logname, when="midnight", interval=1)
handler.suffix = "%Y%m%d"
formatter = logging.Formatter(log_format)
handler.setFormatter(formatter)
logger.addHandler(handler)

import pymongo
import pymongo.database
import pymongo.collection
import pymongo.errors

MONGO_URI = "mongodb+srv://admin:O3ByoOtAKMH01ZrM@sistemergentes.slhwd.mongodb.net/domotica?retryWrites=true&w=majority"  # mongodb://user:pass@ip:port || mongodb://ip:port
MONGO_DB = "domotica"
MONGO_TIMEOUT = 1  # Time in seconds

class Mongo(object):
    def __init__(self):
        self.client: pymongo.MongoClient = None
        self.database: pymongo.database.Database = None
        self.collection: pymongo.collection.Collection = None

    def connect(self):
        print("Connecting Mongo")
        self.client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=MONGO_TIMEOUT*1000.0, ssl_cert_reqs=ssl.CERT_NONE)
        self.database = self.client.get_database(MONGO_DB)
        print(self.client)
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

MQTT_BROKER = "192.241.178.194"
MQTT_PORT = 2096
MQTT_KEEPALIVE = 60
MQTT_QOS = 2
MQTT_TOPICS = ('#')  # Array of topics to subscribe; '#' subscribe to ALL available topics

MQTT_USERNAME = 'emergentes'
MQTT_PASSWORD = 'USAL2021'

MQTT_BROKER = os.getenv("MQTT_BROKER", MQTT_BROKER)
MQTT_PORT = os.getenv("MQTT_PORT", MQTT_PORT)
MQTT_KEEPALIVE = os.getenv("MQTT_KEEPALIVE", MQTT_KEEPALIVE)
MQTT_QOS = os.getenv("MQTT_QOS", MQTT_QOS)
MQTT_TOPICS = os.getenv("MQTT_TOPICS", MQTT_TOPICS)  # As ENV, comma separated
if isinstance(MQTT_TOPICS, str):
    MQTT_TOPICS = [e.strip() for e in MQTT_TOPICS.split(",")]

TIPO_TEMPERATURA = 'TEMPERATURA'
TIPO_LUZ = 'LUZ'
TIPO_VENTILADOR = 'VENTILADOR'
TIPO_HUMEDAD = 'HUMEDAD'
TIPO_MONOXIDO = 'MONOXIDO'
TIPO_HUMO = 'HUMO'
TIPO_REGADOR = 'REGADOR'

TIPOS_VALIDOS = [TIPO_TEMPERATURA, TIPO_LUZ, TIPO_VENTILADOR, TIPO_HUMEDAD, TIPO_MONOXIDO, TIPO_HUMO, TIPO_REGADOR]

TIPOS_COCINA = [TIPO_LUZ,TIPO_HUMO, TIPO_MONOXIDO]
TIPOS_EXTERIOR = [TIPO_HUMEDAD, TIPO_REGADOR]

class Mqtt(object):
    
    def __init__(self):
        def on_connect(client, userdata, flags, returnCode):
            if returnCode == 0:
                print("Connected to MQQT Broker!")
            else:
                print("Failed to connect %d\n", returnCode)
        
        print('Connecting MQTT')
        self.mqtt_client = mqtt.Client()        
        self.mqtt_client.username_pw_set(MQTT_USERNAME, MQTT_PASSWORD)
        self.mqtt_client.tls_set(cert_reqs=ssl.CERT_NONE)
        self.mqtt_client.on_connect = on_connect
        self.mqtt_client.connect(MQTT_BROKER, MQTT_PORT)
        self.mqtt_client.loop_start()
        print('Connected MQTT')


def create_app():
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    db = Mongo()
    mqtt = Mqtt()

    db.connect()

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    @app.route('/', methods=['GET'])
    def query_records():
        limit = request.args.get('limit')        
        if not limit:
            limit = 10
        
        collectionName = request.args.get('collectionName')        
        collection = db.database.get_collection(collectionName)
        queryset = collection.find({}).sort("timestamp", -1).limit(int(limit))
        
        result = []
        for record in list(queryset):
            result.append(
                {
                    'topic': record['topic'],
                    'value':record['value'],
                    'status':record['status'],
                    'datetime': record['datetime']
                })
        
        if not result:
            return jsonify({'error': 'data not found'})
        else:
            return jsonify(result)

    @app.route('/luz', methods=['post'])
    def postTopicLuz():
        try:
            ambiente = request.json['ambiente']
            value = request.json['value']

            if(ambiente >= 1 and ambiente <= 4 and (value == 0 or value == 1)):
                topic = f'casa/interior/ambiente{ambiente}/luz'
                message = buildJsonMessage(ambiente, 'LUZ', value)
                mqtt.mqtt_client.publish(topic, message)
                logger.info(f'published {message} on {topic}')
                return jsonify(message)
            else:
                logger.error(f'error en {request.json} - invalid request')
                return jsonify({'error': 'invalid request'})
        except Exception:
            logger.exception(f'error en {request.json}')
            return jsonify({'error': 'error no manejado'})

    @app.route('/cocina', methods=['post'])
    def postTopicCocina():
        try:
            tipo = request.json['tipo']
            value = request.json['value']

            if(validarJsonCocina(tipo, value)):                
                message = buildJsonMessage(0, tipo, value)
                topic = f'casa/interior/cocina/{tipo.lower()}'
                mqtt.mqtt_client.publish(topic, message)
                logger.info(f'published {message} on {topic}')
                return jsonify(message)
            else:
                return jsonify({'error': 'invalid request'})
        except ValueError as err:
            logger.error(f'error en {request.json} - {err.args[0]}')
            return jsonify({'error': err.args[0]})
        except Exception:
            logger.exception(f'error en {request.json}')
            return jsonify({'error': 'error no manejado'})

    @app.route('/exterior', methods=['post'])
    def postTopicExterior():
        try:
            tipo = request.json['tipo']
            value = request.json['value']
            
            if(validarJsonExterior(tipo, value)):                
                message = buildJsonMessage(0, tipo, value)
                topic = f'casa/exterior/{tipo.lower()}'
                mqtt.mqtt_client.publish(topic, message)
                logger.info(f'published {message} on {topic}')
                return jsonify(message)
            else:
                return jsonify({'error': 'invalid request'})
        except ValueError as err:
            logger.error(f'error en {request.json} - {err.args[0]}')
            return jsonify({'error': err.args[0]})
        except Exception:
            logger.exception(f'error en {request.json}')
            return jsonify({'error': 'error no manejado'})

    return app

def buildJsonMessage(numAmbiente: int, tipo: string, value: None):
    msg = {}
    msg["ambiente"] = numAmbiente
    msg["tipo"] = tipo
    msg["value"] = value if value else 0    

    return json.dumps(msg)
   
def validarJsonExterior(tipo: string, value: None):
    if(tipo in TIPOS_EXTERIOR):
        if(tipo == TIPO_REGADOR):
            if(value == 0 or value == 1):
                return True;  
            else:
                raise ValueError('El valor enviado es inválido.')    
        else:
            return True
    else:
        raise ValueError('El tipo de mensaje enviado es inválido.')

def validarJsonCocina(tipo: string, value: None):
    if(tipo in TIPOS_COCINA):
        if(tipo == TIPO_LUZ):
            if(value == 0 or value == 1):
                return True
            else:
                raise ValueError('El valor enviado es inválido.')
        else:
            return True
    else:
        raise ValueError('El tipo de mensaje enviado es inválido.')