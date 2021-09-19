import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


export interface Coleccion {
  datetime: string;
  status: number;
  topic: string;
  value: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit {
  
  ultimasdiez 
  constructor(private testService : TestService) {}
  ngOnInit(): void {
    // this.ultimasdiez = JSON.parse(this.getData2())
    this.getData()
  }

  getData(){
    this.testService.interiorLuces().subscribe(
      res => {
        console.log(res)
        this.ultimasdiez = res
      },
      error => {
        console.log(error)
      }
    )

  }
  
  getData2(){
    return '[{"datetime":"29/05/2021 23:26:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:25:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:24:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:55","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"},{"datetime":"29/05/2021 23:23:54","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:53","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:52","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"},{"datetime":"29/05/2021 23:23:51","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:50","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:49","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"}]';
  }

}
