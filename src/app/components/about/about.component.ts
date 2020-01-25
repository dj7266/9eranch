import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  lat = 29.985103;
  lng = -97.313435;

  aboutUs = `9E Ranch Cabins Lost Pines Bastrop- Named Best of Bastrop!- If you enjoy night life,
  bright lights, husstle & bustle and fast living, we don't have any of that here.  We have just
  what you need: private cabins, wind in the trees, stars at night and peaceful seclusion.  Cabins
  include free internet, air conditioners/ heat, private bathroom with shower (tub in Daisy,
  Eagles'Nest and Michelle's)  sheets, towels, soap, shampoo, and full kitchen with microwave,
  stove, pots, pans and dishes, as well as coffee, tea, muffins and lots of loving care. Outside
  grills at all cabins to use except when on burn ban.   Two night minimum stay for best rates.
  Included: great memories! Guests are invited to walk among the towering Lost Pines on the ranch,
  view the awesome Texas Longhorns, the horses, count the birds  and wild turkey.  Experience
  ForestBathing, Stargazing and feel the mystery of the  QuietGardens and ThinSpace between Heaven
  and Earth.  Come, relax, unwind, breath,stargaze and  dream at the 9E Ranch.  Enjoy  9E Ranch
  video you tube Welcome here.`;

  constructor() { }

  ngOnInit() {
  }

}
