import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'main-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

// @ViewChild('checkOutDate')
// checkOutElement!: string;

export class BannerComponent implements OnInit {
  images = [
    './assets/mainBanner/1.jpg',
    './assets/mainBanner/2.jpg',
    './assets/mainBanner/3.jpg'
  ];
  checkInDate = new FormControl(new Date());
  checkOutDate = new FormControl(new Date());
  checkInMin = new Date();
  checkOutMin = new Date();



  constructor(private _http: HttpClient) { }

  ngOnInit() {
    console.log(this._http.get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
      &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
      &markers=color:red%7Clabel:C%7C40.718217,-73.998284
      &key=AIzaSyAhBtxlvIxjABKVrxXk_itxZrIqbptQcUI`));
  }

  reserveWithDate(){
    let startDate = `${this.checkInDate.value.getYear() + 1900}-${this.checkInDate.value.getMonth() + 1}-${this.checkInDate.value.getDate()}`;
    let endDate = `${this.checkOutDate.value.getYear() + 1900}-${this.checkOutDate.value.getMonth() + 1}-${this.checkOutDate.value.getDate()}`;
    window.open(`https://via.eviivo.com/ERnchCbnsLstPnsBstrp78957?startdate=${startDate}&enddate=${endDate}&adults1=2&children1=0`);
  }

  setCheckOutMin(){
    this.checkOutMin.setDate(+this.checkInDate.value.getDate() + 1);

  }

}
