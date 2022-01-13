import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiRoot:string = ' http://localhost:3000/';
  constructor(private http:HttpClient) { }

  getCategories() : Observable<any>{

    return this.http.get(`${this.apiRoot}categories`);
  }

  addNewCat(name:string){
    return this.http.post(`${this.apiRoot}categories`,{id:Math.trunc(Math.random()*100) , name:name})

  }

}
