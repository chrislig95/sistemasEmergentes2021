import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  ultimasdiez 
  constructor(private testService : TestService) {}
  ngOnInit(): void {
    // this.ultimasdiez = JSON.parse(this.getData2())
    // console.log(this.ultimasdiez)
    this.getData()

  }

  getData(){
    this.testService.interiorAlarma().subscribe(
      res => {
        console.log(res)
        this.ultimasdiez = res
      },
      error => {
        console.log(error)
      }
    )

  }
}