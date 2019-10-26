import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'gh-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCart();
  }

  doIt() {
    console.log('did it')
  }

  getCartTotal() {
    return this.cart.reduce((acc, product) => { return acc += product.price; }, 0);
  }



}