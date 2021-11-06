# Sistemas Emergentes 2021

# Introducción
## Se realizó un sistema de Domótica donde para ciertos ambientes se realiza lo siguiente:

### Ambientes 1, 2 y 3:
* Sensado de temperatura ambiente
* Encendido de Ventilación
* Encendido de Luces
* Ambiente Cocina:
* Detector de Humo
* Detector de Monóxido de Carbono
* Ambiente Exterior o Jardín:
* Sensado de Humedad
* Control de Regador

En este modelo se utilizaron dispositivos programados en la plataforma Arduino, que publican y reciben información mediante una cola de mensajería MQTT, que es a su vez administrada por un Server.
El server contiene código en lenguaje python, para leer la cola MQTT y persistir la información obtenida a una base de datos no relacional Mongo DB.
Para presentar la información al cliente se utiliza una aplicación diseñada en Javascript con el framework Ionic y Angular.

### El modelo tiene ciertas características de funcionamiento:
* Si la temperatura de los ambientes 1,2 y 3 supera cierto umbral se enciende la ventilación.
* Si se detecta Humo o Monóxido en el ambiente Cocina se enciende una alarma y se envía un correo electrónico notificando lo sucedido.
* Si la humedad del ambiente exterior es baja, se hace una consulta al servicio meteorológico del lugar para verificar si en las próximas horas se esperan precipitaciones, si no es así, se enciende el regador.
