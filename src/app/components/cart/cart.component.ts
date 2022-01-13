import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Shopping } from 'src/app/interfaces/shopping';
import { CartService } from 'src/app/servecies/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!:Shopping[];
  cartSub! : Subscription;
  constructor(
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.getCart().subscribe(data=> {
     return this.cart = data;
      })
    };
  }




