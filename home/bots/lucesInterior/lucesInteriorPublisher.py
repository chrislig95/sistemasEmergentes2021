from re import T
import paho.mqtt.publish as publish
import random
import time
import json
from paho.mqtt import client as mqtt_client

# with open("../home/bots/config.json") as config_file:
#     config = json.load(config_file)

# mqtt_config = config["mqtt"]

# broker_address = mqtt_config["broker"]
# broker_tcp_port = mqtt_config["tcpPort"]
# broker_websocket_port = mqtt_config["webSocketPort"]
# topic="/casa/interior/actuadores/luces"
client_id = f'python-mqtt-{random.randint(0, 1000)}'
# username = mqtt_config["username"]
# password = mqtt_config["password"]

MQTT_BROKER = "192.241.178.194"
#MQTT_BROKER = "test.mosquitto.org"
MQTT_PORT = 2096
#MQTT_PORT = 1883
MQTT_KEEPALIVE = 60
MQTT_QOS = 2
topicLuz = ("casa/interior/ambiente1/luz")
topicTemperatura = ("casa/interior/ambiente1/temperatura")

def connect_mqtt():
    def on_connect(client, userdata, flags, returnCode):
        if returnCode == 0:
            print("Connected to MQQT Broker!")
        else:
            print("Failed to connect %d\n", returnCode)

    # Set Connecting Client ID
    client = mqtt_client.Client(client_id)
    #client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(MQTT_BROKER, MQTT_PORT)
    return client

def publish(client):
    print('publishing')
    print(client)
    while True:
        time.sleep(5)
        msgLuz=getJsonLuz()
        msgTemp=getJsonTemperatura()
        print(msgLuz)
        print(msgTemp)
        client.publish(topicLuz, msgLuz)
        client.publish(topicTemperatura, msgTemp)

def getJsonLuz():
    msg = {}
    msg["ambiente"] = 1
    msg["tipo"] = 'LUZ'
    msg["value"] = random.randint(0, 1)
    return json.dumps(msg)

def getJsonTemperatura():
    msg = {}
    msg["ambiente"] = 1
    msg["tipo"] = 'TEMPERATURA'
    msg["value"] = random.random() * 100
    return json.dumps(msg)

def run():
    client = connect_mqtt()
    client.loop_start()
    publish(client)

if __name__ == '__main__':
    run()
