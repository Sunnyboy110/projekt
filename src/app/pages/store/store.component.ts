import { Component } from '@angular/core';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent {

  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(PopUpComponent, {
      height: '75%',
      width: '45%'
    } );
  }
 }
