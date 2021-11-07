import geocoder
import requests
from datetime import datetime

from requests.models import Response

WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/onecall?'
WEATHER_API_KEY = 'c1c6d8b422ef1c29594c6cf261e031ee'
WEATHER_API_UNITS = 'metric'
WEATHER_API_EXCLUDE = 'minutely,daily'

def getWeatherForecast(lat, lon) -> Response:
    return requests.get(f'{WEATHER_API_URL}lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units={WEATHER_API_UNITS}&exclude={WEATHER_API_EXCLUDE}')

def willRainInNextHours(hours) -> bool:
    geoCoordinates = geocoder.ip('me')
    lat = geoCoordinates.latlng[0]
    lon = geoCoordinates.latlng[1]

    try:
        weatherResponse=getWeatherForecast(lat, lon)

        nextHoursForecast = weatherResponse.json()["hourly"][:hours]    
        for forecast in nextHoursForecast:
            if 'rain' in forecast:
                return True

        return False
    except:
        print('Error en consulta a api de clima')
        return False

if __name__ == '__main__':
    geoCoordinates = geocoder.ip('me')
    lat = geoCoordinates.latlng[0]
    lon = geoCoordinates.latlng[1]

    print(requests.get(f'{WEATHER_API_URL}lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units={WEATHER_API_UNITS}&exclude={WEATHER_API_EXCLUDE}').json())
