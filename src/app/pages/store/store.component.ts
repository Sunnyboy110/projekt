import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent {

  constructor(private dialogRef : MatDialog){}
  odre = [];
  i = 1

  fremvisning(vare) {
    console.log(vare)
    this.odre = [...this.odre, vare]

  }
    openDialog(){
    this.dialogRef.open(PopUpComponent, {
      height: '75%',
      width: '45%'
    } );
  }

  plus(){
    this.i++
  }

  fjern(){
    if(this.i < 2){
      delete this.odre
    }
      else {
        this.i--
      }
      return this.i
  }
}


