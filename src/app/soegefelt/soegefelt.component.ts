import { Component, EventEmitter, Output} from '@angular/core';
import { SearchService} from '../search.service'

@Component({
  selector: 'app-soegefelt',
  templateUrl: './soegefelt.component.html',
  styleUrls: ['./soegefelt.component.css']
})

export class SoegefeltComponent{
  @Output() odreListe = new EventEmitter ();

  vareListe : any = [];

  constructor(private searchService : SearchService) {

  }
  searchChange(event:any) {

    const searchText = event.target.value;
    console.log(searchText)
    if(searchText){
    this.searchService.search(searchText).subscribe ( result => {
      this.vareListe = result;
    })
  } else{
    this.vareListe = [];
  }
  }

  addItem(event, vare) {
    this.odreListe.emit(vare)

  }

}
