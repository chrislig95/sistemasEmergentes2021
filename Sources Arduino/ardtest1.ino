#include <PubSubClient.h>

#include <DHT.h>
#include <DHT_U.h>
#include <ESP8266WiFi.h>

const char* ssid = "Yabiru738";
const char* password = "02320352738";

const char* mqtt_server = "192.241.178.194";
const char* mqtt_user = NULL;
const char* mqtt_pass= NULL;
const int mqtt_port = 2096;

DHT dht(D1,DHT22); 
float temp, hume;

float ip;

  char temperature[8];

// Callback function header
void callback(char* topic, byte* payload, unsigned int length);

WiFiClient espClient;
PubSubClient client(espClient);


void configWifi() {

    Serial.print("Conectando con ");
    Serial.println(ssid);

    // Configuración en modo cliente
    WiFi.mode(WIFI_STA);
    // Iniciar conexión con la red WiFi
    WiFi.begin(ssid, password);
   
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }

    Serial.println("");
    Serial.println("Conectado a la WiFi");

    Serial.println(WiFi.localIP());
}

void reconnect() {
  // Loop until we're reconnected
  Serial.println("In reconnect...");
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
   
    if (client.connect("Arduino_001")) {
      Serial.println("connected");
      client.subscribe("actuador_1");
       
    }
    else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}


void setup() {
  Serial.begin(9600);
   // Configuración WiFi
  configWifi();

  client.setServer(mqtt_server,mqtt_port);
  client.setCallback(callback);
  
  dht.begin();
}

void loop() {

  if (!client.connected()) {
    reconnect();
  }
  
  temp = dht.readTemperature();
  hume = dht.readHumidity();
  
  Serial.println("");
  Serial.println("La temperatura es " + String(temp) + "° y la humedad es " + String(hume)+ "%");

  String json = "{\"ambiente\":1, \"tipo\":\"TEMPERATURA\", \"value\":"+String(temp)+"}";
  char Buf[60];
  json.toCharArray(Buf, 60);

  //dtostrf(json, 6, 2, temperature);
  
  client.publish("casa/interior/ambiente1/temperatura", Buf);

  
  delay(600000);
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");

  String messageTemp;

  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
    messageTemp += (char)payload[i];
  }
  Serial.println();

  // Feel free to add more if statements to control more GPIOs with MQTT

  // If a message is received on the topic actuador, you check if the message is either "on" or "off". 
  // Changes the output state according to the message
  if (String(topic) == "actuador_1") {
    Serial.print("\n Changing output to ");
    if(messageTemp == "1"){
      //Serial.println("on");
      //digitalWrite(LED_BUILTIN, HIGH);
    }
    else if(messageTemp == "0"){
      //Serial.println("off");
      //digitalWrite(LED_BUILTIN, LOW);
    }
  }
}
