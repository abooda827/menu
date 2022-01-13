import { Shopping } from './../interfaces/shopping';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiRoot:string = ' http://localhost:3000/';
  constructor(private http:HttpClient) { }

  addToCart (name:string , amount:number  , price:number) : Observable<any>{
    return this.http.post(`${this.apiRoot}cart`,{id:Math.trunc(Math.random()*100) , name , amount , price})
  }

  getCart() : Observable<any>{

      return this.http.get(`${this.apiRoot}cart`);
  }

  delete(id:string){

  }

  save(id:string , amount:number){

  }
}
