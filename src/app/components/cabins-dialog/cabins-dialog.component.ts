import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { faCoffee, faCheckSquare, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


export interface DialogData {
  img: string;
  title: string;
  description: string;
  amenities: string;
  waring: string;
}


@Component({
  selector: 'app-cabins-dialog',
  templateUrl: './cabins-dialog.component.html',
  styleUrls: ['./cabins-dialog.component.scss']
})
export class CabinsDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('image', {static: false})
  images: ElementRef;

  faCoffee = faCoffee;
  faCheckSquare = faCheckSquare;
  faExclamationTriangle = faExclamationTriangle;

  constructor(
    public dialogRef: MatDialogRef<CabinsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const firstChild = this.images.nativeElement.querySelector('.carousel-item');
    if (firstChild) {
      firstChild.classList.add('active');
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
