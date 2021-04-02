import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = "http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  getAll(filter: any): Observable<any>{
    let requestApi = this.API_URL + "?_expand=category&_expand=author";
    switch(filter.orderBy){
      case "1":
        requestApi += `&_sort=price&_order=asc`;
        break;
      case "2":
        requestApi += `&_sort=price&_order=desc`;
        break;
      case "3":
        requestApi += `&_sort=title&_order=asc`;
        break;
      case "4":
        requestApi += `&_sort=title&_order=desc`;
        break;
    }

    if(filter.keyword.length > 0){
      requestApi += `&title_like=${filter.keyword}`;
    }

    return this.http.get<any>(requestApi);
  }

  findById(bookId: string): Observable<any>{
    let requestApi = `${this.API_URL}/${bookId}?_expand=category&_expand=author`;
    return this.http.get<any>(requestApi);
  }

  updateBook(data){

  }
}
