import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ultimasdiez 
  constructor(private testService : TestService) {}
  ngOnInit(): void {
    // this.ultimasdiez = JSON.parse(this.getData2())
    // console.log(this.ultimasdiez)
    this.getData()

  }

  getData(){
    this.testService.interiorHumo().subscribe(
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
  