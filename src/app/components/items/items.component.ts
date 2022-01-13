import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { Item } from 'src/app/interfaces/item';
import { CategoriesService } from 'src/app/servecies/categories.service';
import { ItemsService } from 'src/app/servecies/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  constructor(private catService:CategoriesService , private itemsService : ItemsService) { }
  categories!:Category[];
  catSub!:Subscription;
  categoryId!:number
  ngOnInit(): void {

    this.catSub = this.catService.getCategories().subscribe(data=> {
      this.categories = data;
      })
    };


  addNewItem(form: NgForm){
    let
      name = (<Item>form.value).name,
      price = (<Item>form.value).price,
      cat = (<Item>form.value).category

    this.itemsService.addNewItem(name!, price!, cat!).subscribe(res=>{
      console.log(res);
    });
  }
}
