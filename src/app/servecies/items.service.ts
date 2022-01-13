import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  apiRoot:string = ' http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getItems(id:number) : Observable<any>{

    return this.http.get(`${this.apiRoot}items/?category=${+id}`);
  }

  addNewItem(name:string, price:number, cat:string){
    return this.http.post(`${this.apiRoot}items`,{id:Math.trunc(Math.random()*100) , name , price , category:cat})


  }
}
