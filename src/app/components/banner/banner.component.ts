import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'main-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images = [
    'https://picsum.photos/900/500?random&t=0.919683675527512',
    'https://picsum.photos/900/500?random&t=0.919683675527513',
    'https://picsum.photos/900/500?random&t=0.919683675527514',
  ];
  checkInDate = new FormControl(new Date());
  checkOutDate = new FormControl(new Date());
  checkInMax: Date;
  checkOutMin: Date;

  constructor() { }

  ngOnInit() {
  }

  reserveWithDate(){
    console.log(this.checkInDate.value);
    console.log(this.checkOutDate.value);
  }

  setCheckOutMin(){
    this.checkOutMin = this.checkInDate.value;
    console.log('this is running')
  }

}
