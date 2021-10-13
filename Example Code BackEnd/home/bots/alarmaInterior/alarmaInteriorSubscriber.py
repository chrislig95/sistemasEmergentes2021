from mqttPublisherTest import connect_mqtt
from paho.mqtt import client as mqtt_client
topic="/casa/interior/actuadores/alarma"

#topic="/casa/interior/alarma"

def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        print("MensajeReceived `{msg.payload.decode()}` from `{msg.topic}` topic")
        alerta=msg.payload.decode()
        if alerta == "1":
            #Envio señal alarma
            print("Encender alarma")
        else:
            #Envio señal alarma
            print("Apagar alarma")
         
    client.subscribe(topic)
    client.on_message = on_message


def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()

if __name__ == '__main__':
    run()