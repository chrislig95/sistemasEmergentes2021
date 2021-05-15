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
topic="/casa/exterior/sensores/temperatura"
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
    client.on_connect = on_connect
    client.connect(broker_address, broker_tcp_port)
    return client

def publish(client):
    msg_count = 0
    while msg_count < 10:
        time.sleep(1) #esperar un segundo para publicar el mensaje
        #msg = f"messages: {msg_count}"
        value = random.randint(-15,40)
        #messages num
        #la idea del mensaje es publicar el valor de porej. el valor de la temperatura
        msg = f"temperatura: {value}"
        
        #definicion de status segun lo que devuelva value o el timestamp
        #0 apagado - 1 encendido OK - 2 encendido Error
        status=1
        #definir funcion para que devuelva status segun lo que se procesa
        #getStatus():0/1/2
        #getStatus-->0 si el último posteo de fue hecho hace mas de X tiempo
        #getStatus-->1 si el último posteo de fue hecho hace mas de X tiempo y el valor obtenido está dentro de rango
        #getStatus-->2 si el último posteo de fue hecho hace mas de X tiempo y el valor obtenido está fuera de rango
        
        #getRangoTemp-->obtener el valor establecido como max y min aceptables


        result = client.publish(topic, msg, status)
        
        status = result[0]
        if status == 0:
           #print(f"Send `{msg}` to topic `{topic}`")
           print(f"`{topic}`,`{msg}`,`{status}`")
        else:
           print(f"Failed to send message to topic {topic}")
        msg_count += 1


def run():
    client = connect_mqtt()
    client.loop_start()
    publish(client)

if __name__ == '__main__':
    run()