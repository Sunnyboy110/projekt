import { Component } from '@angular/core';
import { SearchService} from '../search.service'

@Component({
  selector: 'app-soegefelt',
  templateUrl: './soegefelt.component.html',
  styleUrls: ['./soegefelt.component.css']
})
export class SoegefeltComponent{
  vareListe : any= [];
  constructor(private searchService : SearchService) {

  }
  searchChange(event:any) {
    const searchText = event.target.value;
    this.searchService.search(searchText).subscribe ( result => {
      this.vareListe = result;
    })
  }
}
