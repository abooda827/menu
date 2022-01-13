import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/servecies/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent{

  constructor( private catService:CategoriesService) { }

  addNewCat(form: NgForm){
    let
      name = (<Category>form.value).name
    console.log(name)
    this.catService.addNewCat(name!).subscribe(res=>{
      console.log(res)
    });
  }

}
