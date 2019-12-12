import { Component, OnInit } from '@angular/core';
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CabinsDialogComponent } from '../cabins-dialog/cabins-dialog.component';


@Component({
  selector: 'app-cabins',
  templateUrl: './cabins.component.html',
  styleUrls: ['./cabins.component.scss']
})
export class CabinsComponent implements OnInit {
  faCoffee = faCoffee;
  faCheckSquare = faCheckSquare;
  cabins = [
    {
      img: './assets/eaglesNest/1.jpg',
      title: 'Texas Lone Star Log Cabin',
      description:
        'Experience Texas Ranch in a log cabin with old fashoned wood burning stove, with cowboy theme.',
      amenities: [
        'Full size built in bed downstairs; 2 twin beds in loft',
        'Full kitchen with pots, pans, dishes, coffee maker, microwave, oven/stove.',
        'Bathroom with shower.',
        'Dog friendly with fenced yard.',
        'No TV.'
      ]
    },
    {
      img: './assets/eaglesNest/1.jpg',
      title: 'Eagles Nest Log Cabin',
      description:
        'Eagles Nest Cabin has breathtaking views from the magical highest hill in Bastrop County and was designed for romance and intimacy.',
      amenities: [
        'Queen bed and sleeper sofa',
        'Antique bathtub plus shower',
        'No pets because guests with allergies need a place to enjoy.',
      ]
    },
    {
      img: './assets/daisy/1.jpg',
      title: 'Daisy Cabin',
      description:
        'Is one of the best places to stay in Bastrop County; a  cottage with stunning views and private decks on every side located on a hill.',
      amenities: [
        'Two bedrooms with queen beds',
        'Sleeper sofa in living room',
        'Jacuzzzi tub with shower in the and exciting outside shower!',
        'Well behaved dogs that stay off bed and furniture are welcome for $15 per night per dog',
      ]
    },
    {
      img: './assets/michelle/1.jpg',
      title: `Michelle's Log Cabin`,
      description:
        '',
      amenities: [
        'Queen bed in the loft',
        'Two single day beds downstairs',
        'Antique bath tub and shower',
        'Dog friendly with fenced area for well behaved dogs who stay off the bed ($15 per night per dog)',
        'No TV'

      ]
    }
  ];

  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CabinsDialogComponent, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
