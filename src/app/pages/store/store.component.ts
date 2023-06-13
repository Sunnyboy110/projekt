import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { EMPTY, empty } from 'rxjs';
import { NgFor } from '@angular/common';
import { AdminSiteComponent } from '../admin-site/admin-site.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',


  styleUrls: ['./store.component.css']
})

export class StoreComponent {

  @ViewChild('navn') navn : ElementRef <HTMLInputElement>;
  constructor(private dialogRef : MatDialog){
  }

  ordre : any = [];
  totalPris = 0;
  navnInput = '';
  pant = 0;



  isButtonDisabled(){
    if(this.ordre.length === 0 || this.navn.nativeElement.value === ''){
      return true}
    else {
      return false
    }

  }

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
        pris : vare.pris,
        pant : vare.Pant
      }
      this.ordre = [...this.ordre, ordreItem]
    }
    this.totalPris = this.udregnTotalPris(this.ordre)
    this.pant = this.pantPris(this.ordre)

    // console.log(this.ordre)
  }

  //   openDialog(val){
  //     this.navnInput = val
  //     console.log(this.navnInput)

  //     if(this.navnInput === ''){
  //       let inputNavn = document.getElementById('input') ;
  //       inputNavn.style.border = 'solid';
  //       inputNavn.style.borderColor = '#D8000C' ;
  //     }
  //     else{
  //       const bestilling : any = {
  //         navn : this.navnInput,
  //         ordreListe : this.ordre
  //       }
  //       console.log(bestilling)

  //     this.dialogRef.open(PopUpComponent, {
  //       height: '75%',
  //       width: '45%',
  //       data : {
  //         navn : this.navnInput,
  //         ordre : this.ordre,
  //         tPris : this.totalPris,
  //         pant : this.pant,
  //       }
  //     } );

  //     }

  // }



  openDialog(val){
    this.navnInput = val
    console.log(this.navnInput)


      const bestilling : any = {
        navn : this.navnInput,
        ordreListe : this.ordre
      }
      console.log(bestilling)

    this.dialogRef.open(PopUpComponent, {
      height: '75%',
      width: '45%',
      data : {
        navn : this.navnInput,
        ordre : this.ordre,
        tPris : this.totalPris,
        pant : this.pant,
      }
    } );
}

  plus(ordreVare){
    console.log(ordreVare)
    ordreVare.antal++
    console.log(ordreVare)
    this.totalPris = this.udregnTotalPris(this.ordre)
    this.pant = this.pantPris(this.ordre)
  }

  fjern(ordreVare){

    ordreVare.antal--

    if(ordreVare.antal === 0){
      const newOrdre = this.ordre.filter((vareObject) => {
        return vareObject.id !== ordreVare.id
    })

    this.ordre = newOrdre
    }
    this.totalPris = this.udregnTotalPris(this.ordre)
    this.pant = this.pantPris(this.ordre)
  }

  udregnTotalPris (ordre){
    let samletPris = 0;
    for (const ordreItem of ordre) {
      samletPris += ordreItem.pris * ordreItem.antal + ordreItem.pant * ordreItem.antal
    }
    console.log(samletPris)
    return samletPris;
  }

  pantPris (ordre) {
    let pPris = 0;
    for (const ordreItem of ordre) {
      pPris += ordreItem.antal * ordreItem.pant
    }
    return pPris;
  }


}

