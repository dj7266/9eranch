import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.scss']
})
export class ThingsToDoComponent implements OnInit {
  numberOfImageJoanArt = 20;
  numberOfImageQuietGarden = 7;
  listJoanArt = [];
  listQuietGarden = [];

  constructor() {
    for (let i = 1 ; i < this.numberOfImageJoanArt +1 ; i++) {
      this.listJoanArt.push(i);
    }
    for (let i = 1 ; i < this.numberOfImageQuietGarden + 1 ; i++) {
      this.listQuietGarden.push(i);
    }
  }

  ngOnInit() {

  }

  getSource(path, num){
    return `./assets/${path}/${num}.jpg`;
  }

}
