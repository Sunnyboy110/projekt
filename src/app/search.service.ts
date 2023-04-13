import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(
    searchText: string
  ){
    let queryParams = new HttpParams ();
    queryParams = queryParams.append ( 'searchText', searchText)
    return this.http.get('/search', {params : queryParams})
  }

}
