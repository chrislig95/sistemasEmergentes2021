from mqttPublisherTest import connect_mqtt
from paho.mqtt import client as mqtt_client

topic="/casa/exterior/actuadores/lucesExterior"

#topic="/casa/exterior/actuadores/lucesExterior"

def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        print("MensajeReceived `{msg.payload.decode()}` from `{msg.topic}` topic")
        alerta=msg.payload.decode()
        if alerta == "1":
            #Envio señal luces
            print("Encender luces")
        else:
            #Envio señal luces
            print("Apagar luces")
         
    client.subscribe(topic)
    client.on_message = on_message
def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        print(f"Received `{msg.payload.decode()}` from `{msg.topic}` topic")

    client.subscribe(topic)
    client.on_message = on_message


def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()

if __name__ == '__main__':
    run()