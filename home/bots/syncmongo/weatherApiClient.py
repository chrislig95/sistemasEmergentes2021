import geocoder
import requests
from datetime import date, datetime

from requests.models import Response

WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/onecall?'
WEATHER_API_KEY = 'c1c6d8b422ef1c29594c6cf261e031ee'
WEATHER_API_UNITS = 'metric'
WEATHER_API_EXCLUDE = 'minutely,daily'

lastApiCall = None
apiCallResult = None
latitude = None
longitude = None

def getWeatherForecast(lat, lon) -> Response:
    global lastApiCall
    global apiCallResult
    
    currentHour = datetime.utcnow().hour
    if(lastApiCall is None or currentHour > lastApiCall.hour or (lastApiCall.hour == 23 and currentHour.hour == 0)):        
        apiCallResult = requests.get(f'{WEATHER_API_URL}lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units={WEATHER_API_UNITS}&exclude={WEATHER_API_EXCLUDE}')
        lastApiCall = datetime.utcnow()    
        print('Api de clima: Se hizo el request.')
    else:        
        print('Api de clima: Se uso el resultado guardado.')            

    return apiCallResult  
    

def willRainInNextHours(hours) -> bool:
    global latitude
    global longitude
    if(latitude is None):
        try:
            geoCoordinates = geocoder.ip('me')
            lat = geoCoordinates.latlng[0]
            lon = geoCoordinates.latlng[1]
        except:
            lat = -34.5742
            lon = -58.535
    else:
        lat = latitude
        lon = latitude    

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
