import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = "http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    let requestApi = this.API_URL + "?_expand=category&_expand=author";
    return this.http.get<any>(requestApi);
  }

  findById(bookId){

  }

  updateBook(data){

  }
}
