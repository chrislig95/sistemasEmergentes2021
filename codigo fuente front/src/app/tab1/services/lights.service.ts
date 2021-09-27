import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightsService {

  constructor(private http : HttpClient) {
  }
  
  toggleLight(value : boolean, ambiente: number){
    return this.http.post('https://ws.nerdingland.com/luz',{"ambiente": ambiente, "value": value});

   }
   getLight(ambiente){
    return this.http.get('https://ws.nerdingland.com/?collectionName=casa/interior/'+ambiente+'/luz');

   }


}
