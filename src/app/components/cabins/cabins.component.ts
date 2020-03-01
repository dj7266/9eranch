import { Component, OnInit } from '@angular/core';
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { CabinsDialogComponent } from '../cabins-dialog/cabins-dialog.component';
import { cabins } from './cabins';

@Component({
  selector: 'app-cabins',
  templateUrl: './cabins.component.html',
  styleUrls: ['./cabins.component.scss']
})
export class CabinsComponent implements OnInit {
  faCoffee = faCoffee;
  faCheckSquare = faCheckSquare;
  cabins = cabins;

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
