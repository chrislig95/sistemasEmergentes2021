import ssl
import paho.mqtt.publish as publish
import random
import time
import json

from paho.mqtt import client as mqtt_client

with open("config.json") as config_file:
    config = json.load(config_file)

mqtt_config = config["mqtt"]

broker_address = mqtt_config["broker"]
broker_tcp_port = mqtt_config["tcpPort"]
broker_websocket_port = mqtt_config["webSocketPort"]
topicMonoxido="casa/interior/cocina/monoxido"
topicHumo="casa/interior/cocina/humo"
client_id = f'python-mqtt-{random.randint(0, 1000)}'
username = mqtt_config["username"]
password = mqtt_config["password"]

def connect_mqtt():
    def on_connect(client, userdata, flags, returnCode):
        if returnCode == 0:
            print("Connected to MQQT Broker!")
        else:
            print("Failed to connect %d\n", returnCode)

    # Set Connecting Client ID
    client = mqtt_client.Client(client_id)
    client.username_pw_set(username, password)
    client.tls_set(cert_reqs=ssl.CERT_NONE)
    client.on_connect = on_connect
    client.connect(broker_address, broker_tcp_port)
    return client

def publish(client):            
    while True:
        monoxidoValue = random.randint(1000, 1250)
        jsonMonoxido = buildJsonMessage('cocina', 'MONOXIDO', monoxidoValue)
        result = client.publish(topicMonoxido, jsonMonoxido)    

        status = result[0]
        if status == 0:
            print(f"Sent `{jsonMonoxido}` to topic `{topicMonoxido}`")
        else:
            print(f"Failed to send message to topic {topicMonoxido}")

        humoValue = random.randint(0, 70)
        jsonHumo = buildJsonMessage('cocina', 'HUMO', humoValue)
        result = client.publish(topicHumo, jsonHumo)    

        status = result[0]
        if status == 0:
            print(f"Sent `{jsonHumo}` to topic `{topicHumo}`")
        else:
            print(f"Failed to send message to topic {topicHumo}")
        time.sleep(60)

def run():
    client = connect_mqtt()
    client.loop_start()
    publish(client)

def buildJsonMessage(ambiente, tipo, value):
    msg = {}
    msg["ambiente"] = ambiente
    msg["tipo"] = tipo
    msg["value"] = value

    return json.dumps(msg)

if __name__ == '__main__':
    run()