import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {


  

  constructor(private http : HttpClient) {
  }

  // test(){
  //  return this.http.get('http://localhost/backendEmergentes/public/api/test');
  // }
  interiorLuces(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=casa/interior/ambiente1/luz');
   }
   exteriorLuces(){
    return this.http.get('http://localhost:1000/?collectionName=exteriorLuces');
   }
   interiorMonoxido(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=interiorMonoxido');

   }

   exteriorTemperatura(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=casa/interior/ambiente1/temperatura');

   }
   exteriorTemperatura2(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=casa/interior/ambiente2/temperatura');

   }
   interiorAlarma(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=interiorAlarma');

   }
   exteriorAlarma(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=exteriorAlarma');

   }
   exteriorLuzSolar(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=exteriorLuzSolar');

   }
   exteriorRiego(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=exteriorRiego');

   }
   interiorHumo(){
    return this.http.get('https://ws.nerdingland.com/?collectionName=interiorHumo');

   }

 



  // public function for sending and publishing mqtt messages

  // public sendMessage() {
  //   console.log('sendMessage')
  //   this._mqttService.sendMessage("/myFirstDatabase?retryWrites=true&w=majority", MESSAGE);
  // }

  // public publishMessage() {
  //   console.log('publishMessage')
  //   this._mqttService.publishMessage(TOPIC, MESSAGE);
  // }


}
