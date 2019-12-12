import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-cabins-dialog',
  templateUrl: './cabins-dialog.component.html',
  styleUrls: ['./cabins-dialog.component.scss']
})
export class CabinsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CabinsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
