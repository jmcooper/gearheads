import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gh-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  @Input() preview: boolean;
  @Output() addToCartClicked = new EventEmitter();

  addToCart(product) {
    this.addToCartClicked.emit(product);
  }

}
