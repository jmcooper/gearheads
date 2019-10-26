import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../checkout/cart.service';

@Component({
  selector: 'gh-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  @Output() addToCartClicked = new EventEmitter();

  addToCart(product) {
    this.addToCartClicked.emit(product);
  }

}
