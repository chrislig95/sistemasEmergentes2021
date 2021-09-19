import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  ultimasdiez 
  constructor(private testService : TestService) {}
  ngOnInit(): void {
    // this.ultimasdiez = JSON.parse(this.getData2())
    // console.log(this.ultimasdiez)
    this.getData()

  }

  getData(){
    this.testService.interiorMonoxido().subscribe(
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
  