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
username = mqtt_config["username"]
password = mqtt_config["password"]

client_id = f'python-mqtt-{random.randint(0, 1000)}'

humo_config = config["humo"]
HUMO_MINIMO = humo_config["minimo"]
HUMO_MAXIMO = humo_config["maximo"]
HUMO_TOPIC = humo_config["topico"]

monoxido_config = config["monoxido"]
MONOXIDO_MINIMO = monoxido_config["minimo"]
MONOXIDO_MAXIMO = monoxido_config["maximo"]
MONOXIDO_TOPIC = monoxido_config["topico"]

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
        monoxidoValue = random.randint(MONOXIDO_MINIMO, MONOXIDO_MAXIMO)
        jsonMonoxido = buildJsonMessage('cocina', 'MONOXIDO', monoxidoValue)
        result = client.publish(MONOXIDO_TOPIC, jsonMonoxido)    

        status = result[0]
        if status == 0:
            print(f"Sent `{jsonMonoxido}` to topic `{MONOXIDO_TOPIC}`")
        else:
            print(f"Failed to send message to topic {MONOXIDO_TOPIC}")

        humoValue = random.randint(HUMO_MINIMO, HUMO_MAXIMO)
        jsonHumo = buildJsonMessage('cocina', 'HUMO', humoValue)
        result = client.publish(HUMO_TOPIC, jsonHumo)    

        status = result[0]
        if status == 0:
            print(f"Sent `{jsonHumo}` to topic `{HUMO_TOPIC}`")
        else:
            print(f"Failed to send message to topic {HUMO_TOPIC}")
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