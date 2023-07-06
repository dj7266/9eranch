import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "main-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})

// @ViewChild('checkOutDate')
// checkOutElement!: string;
export class BannerComponent implements OnInit {
  images = [
    "./assets/mainBanner/1.jpg",
    "./assets/mainBanner/2.jpg",
    "./assets/mainBanner/3.jpg"
  ];
  checkInDate = new FormControl(new Date());
  checkOutDate = new FormControl(new Date());
  checkInMin = new Date();
  checkOutMin = new Date();
  error: string;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    let twoDaysAfter = new Date();
    twoDaysAfter.setDate(this.checkInDate.value.getDate() + 2)
    this.checkOutDate = new FormControl(twoDaysAfter);
  }

  reserveWithDate() {
    this.checkTwoDayMinimum();
    if(!this.error){
      let startDate = `${this.checkInDate.value.getYear() +
        1900}-${this.checkInDate.value.getMonth() +
        1}-${this.checkInDate.value.getDate()}`;

      let endDate = `${this.checkOutDate.value.getYear() +
        1900}-${this.checkOutDate.value.getMonth() +
        1}-${this.checkOutDate.value.getDate()}`;

      window.open(
        `https://via.eviivo.com/ERnchCbnsLstPnsBstrp78957?startdate=${startDate}&enddate=${endDate}&adults1=2&children1=0`
      );
    }
  }

  checkInDateChange(e){
    if( this.checkOutDate.value - this.checkInDate.value < 2 * (1000 * 60 * 60 * 24)){
      let twoDayAfter = new Date();
      twoDayAfter.setDate(e.target.value.getDate() + 2)
      this.checkOutDate = new FormControl(twoDayAfter);
    }
    this.checkTwoDayMinimum();
  }

  checkTwoDayMinimum() {
    if (
      this.checkOutDate.value.getDate() - this.checkInDate.value.getDate() <
      2
    ) {
      this.error = "Sorry, we have two days minimum policy";
    } else{
      this.error = "";
    }
  }
}
