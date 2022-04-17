import { Component, OnInit } from '@angular/core';
import { EplatformlibService } from '@ddggroup/angular-lib';

@Component({
  selector: 'pmo-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.less']
})
export class RestaurantComponent implements OnInit {
  myVal: string = 'test'
  showItems = false;

  constructor(private eplatformlibService: EplatformlibService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showItems = !this.showItems;
    }, 1000);
  }

  setDataFun() {
    console.log('in restaurant setDataFun()')
    this.eplatformlibService.setData('myName', this.myVal);
  }

  getDataFun() {
    console.log('in restaurant getDataFun()')
    this.eplatformlibService.getData('myName')
  }
}
