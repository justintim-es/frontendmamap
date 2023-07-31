import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-careconsumer-request-choose-stars',
  templateUrl: './main-careconsumer-request-choose-stars.component.html',
  styleUrls: ['./main-careconsumer-request-choose-stars.component.css']
})
export class MainCareconsumerRequestChooseStarsComponent implements OnInit {
  @Input('stars') stars!: number;
  arr: number[];
  constructor() {
    this.arr =[];
    for (let i = 0; i < 5; i++) {
      this.arr.push(i);
    }
  }
  ngOnInit() {

  }
  showStar(index: number) {
    if (this.stars! >= index + 1) {
      return 'star';
    } else return 'star_border'
  }

}
