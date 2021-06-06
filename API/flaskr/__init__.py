import os
import ssl
from flask import Flask, request, jsonify
from flask_cors import CORS

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

def create_app():
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    db = Mongo()

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
        collectionName = request.args.get('collectionName')
        
        collection = db.database.get_collection(collectionName)

        queryset = collection.find({}).sort("datetime",-1).limit(10)
        
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

    return app