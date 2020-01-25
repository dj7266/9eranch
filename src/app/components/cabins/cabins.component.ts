import { Component, OnInit } from '@angular/core';
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
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
      img: [
        './assets/loneStar/1.jpg',
        './assets/loneStar/2.jpg',
        './assets/loneStar/3.jpg'
      ],
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
      img: [
        './assets/eaglesNest/1.jpg',
        './assets/eaglesNest/2.jpg',
        './assets/eaglesNest/3.jpg'
      ],
      title: 'Eagles Nest Log Cabin',
      description:
        'Eagles Nest Cabin has breathtaking views from the magical highest hill in Bastrop County and was designed for romance and intimacy.',
      amenities: [
        'Queen bed and sleeper sofa',
        'Antique bathtub plus shower',
        'No pets because guests with allergies need a place to enjoy.'
      ]
    },
    {
      img: [
        './assets/daisy/1.jpg',
        './assets/daisy/2.jpg',
        './assets/daisy/3.jpg'
      ],
      title: 'Daisy Cabin',
      description:
        `The private two bedroom  Daisy Cabin accommodations includes queen beds in each bedroom and a sleeper sofa
        in the living Room.  The kitchen is fully furnished  with pots, pans, dishes.  Daisy has central AC/Heat and
        is Daisy is pet friendly for well behaved dogs who stay off the beds and furniture.  Daisy is decorated in
        family antiques.  Daisy sits on a hill with decks and views of the pines, Longhorns and nature in every direction.
        The Texas Daisy Cabin is the perfect lodging for birders and anyone who loves nature.  Breakfast of
        muffins and coffee left in cabin.  Guests tell us staying in Daisy is Better than an hotel and best lodging
        in Bastrop!!  Guests keep coming back year after year.  They become family of the 9E Ranch!  Best Little
        Cabin in Texas!`,
      amenities: [
        'Two bedrooms with queen beds',
        'Sleeper sofa in living room',
        'Jacuzzzi tub with shower in the and exciting outside shower!',
        'Well behaved dogs that stay off bed and furniture are welcome for $15 per night per dog'
      ]
    },
    {
      img: [
        './assets/michelle/1.jpg',
        './assets/michelle/2.jpg',
        './assets/michelle/3.jpg'
      ],
      title: `Michelle's Log Cabin`,
      description: '',
      amenities: [
        'Queen bed in the loft',
        'Two single day beds downstairs',
        'Antique bath tub and shower',
        'Dog friendly with fenced area for well behaved dogs who stay off the bed ($15 per night per dog)',
        'No TV'
      ]
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(cabin): void {
    const dialogRef = this.dialog.open(CabinsDialogComponent, {
      data: cabin,
      maxWidth: '800px',
      height: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
