import { Category } from './../../interfaces/category';
import { CategoriesService } from 'src/app/servecies/categories.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/servecies/cart.service';
import { Item } from 'src/app/interfaces/item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from 'src/app/servecies/items.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{
  constructor(private catService:CategoriesService , private cartService:CartService , private activatedRoute:ActivatedRoute , private itemsService:ItemsService) {

  }
  categories!:Category[];
  catSub!:Subscription;
  categoryId:number = 1
  items:Item[] = [];
  itemsSub!:Subscription;
  add = 0;
  amount:number=0

  ngOnInit(): void {

    this.catSub = this.catService.getCategories().subscribe(data=> {
      this.categories = data;
      })

      this.itemsService.getItems(this.categoryId).subscribe(items=> {
        this.items = items;
        })
    };



  ngOnDestroy(){
    this.catSub.unsubscribe();

  }



  getCatItems(){

    this.activatedRoute.params.subscribe((params) => {

      this.categoryId = params['id']

      this.itemsService.getItems(this.categoryId).subscribe(items=> {
        this.items = items;
        })
    })

  }


  buy(name:string , price:number){
    this.cartService.addToCart(name , this.amount , price).subscribe(data=> {
      return data;
      })
  }


  onKeyUp($event:any){
    this.amount = $event.target.value
  }

}
