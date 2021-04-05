import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = "http://localhost:3000/categories";
  constructor(private http: HttpClient){}
  
  all(embed: boolean = true): Observable<Category[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_embed=books';
    return this.http.get<Category[]>(requestUrl);
  }
}
