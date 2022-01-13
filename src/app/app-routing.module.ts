import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'cart' , component: CartComponent },
  { path: 'add-category' , component: AddCategoryComponent },
  { path: 'items/:id' , component: HomeComponent },
  { path: 'add-item' , component: ItemsComponent },
  { path: '**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
