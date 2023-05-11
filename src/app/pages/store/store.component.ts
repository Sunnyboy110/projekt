import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { EMPTY, empty } from 'rxjs';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',


  styleUrls: ['./store.component.css']
})

export class StoreComponent {

  constructor(private dialogRef : MatDialog){
  }

  ordre : any = [];

  fremvisning(vare) {

    const existingElement = this.ordre.find(ordreVare => ordreVare.id === vare.id)

    if (existingElement){
      existingElement.antal++
      this.ordre = [...this.ordre]

    } else {
      const ordreItem : any = {
        id : vare.id,
        navn : vare.vare_navn,
        antal : 1,
        pris : vare.pris
      }
      this.ordre = [...this.ordre, ordreItem]
    }
    console.log(this.ordre)
  }

    openDialog(val){
      this.ordre.push(val)
      console.log(this.ordre)
    this.dialogRef.open(PopUpComponent, {
      height: '75%',
      width: '45%'
    } );
  }

  plus(ordreVare){
    console.log(ordreVare)
    ordreVare.antal++
    // console.log(ordreVare.antal)
  }

  fjern(ordreVare){

    ordreVare.antal--

    if(ordreVare.antal === 0){
      const newOrdre = this.ordre.filter((vareObject) => {
        return vareObject.id !== ordreVare.id
    })

    this.ordre= newOrdre
    }
  }
}


