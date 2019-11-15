import { Component, ViewChild } from '@angular/core';
import { CartService } from '../checkout/cart.service';
import { CartComponent } from '../checkout/cart.component';
import { Product } from './product';

@Component({
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {
  cart: any = [];
  @ViewChild(CartComponent, {static: false}) cartComponent:CartComponent;
  
  constructor(private cartService: CartService) {
    this.cart = cartService
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    if (this.cartComponent.getCartTotal() > 1000) {
      this.products.forEach(p => p.discountPercent = .1);
    } 
  }

  products = [
    new Product('Arm: Articulated Claw', 'arm-articulated-claw.png', 299.95),
    new Product('Arm: Grabber', 'arm-grabber.png', 199.95),
    new Product('Head: Surveillance', 'head-surveillance.png', 599.95),
    new Product('Head: Cyclops', 'head-cyclops.png', 499.95),
    new Product('Base: Single Wheel', 'base-single-wheel.png', 299.95),
    new Product('Base: Rocket', 'base-rocket.png', 499.95),
    new Product('Torso: Small Gauge', 'torso-small-gauge.png', 499.95),
    new Product('Head: Friendly', 'head-friendly.png', 450.00),
    new Product('Torso: Large Gauge', 'torso-large-gauge.png', 499.95),
    new Product('Arm: Dual Claw', 'arm-dual-claw.png', 250.00),
    new Product('Base: Spring', 'base-spring.png', 299.95),
    new Product('Arm: Propeller', 'arm-propeller.png', 399.95),
    new Product('Head: Shredder', 'head-shredder.png', 699.95),
    new Product('Arm: Stubby Claw', 'arm-stubby-claw.png', 150.00),
    new Product('Base: Dual Wheel', 'base-dual-wheel.png', 299.95),
    new Product('Base: Roller', 'base-roller.png', 299.95),
    new Product('Head: One Eyed Jack', 'head-cyclops-shredder.png', 299.95),
    new Product('Torso: Pouch', 'torso-pouch.png', 399.95),
  ];
}
