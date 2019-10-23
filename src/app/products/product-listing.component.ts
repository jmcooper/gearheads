import { Component } from '@angular/core';
import { CartService } from '../checkout/cart.service';

@Component({
  selector: 'product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {
  cart: any;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCart();
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  getCartTotal() {
    return this.cart.reduce((acc, product) => { return acc += product.price; }, 0);
  }


  products = [
    {
      title: 'Arm: Articulated Claw',
      imageUrl: '/app/products/product-images/arm-articulated-claw.png',
      price: 299.95
    },
    {
      title: 'Arm: Grabber',
      imageUrl: '/app/products/product-images/arm-grabber.png',
      price: 199.95
    },
    {
      title: 'Head: Surveillance',
      imageUrl: '/app/products/product-images/head-surveillance.png',
      price: 599.95
    },
    {
      title: 'Head: Cyclops',
      imageUrl: '/app/products/product-images/head-cyclops.png',
      price: 499.95
    },
    {
      title: 'Base: Single Wheel',
      imageUrl: '/app/products/product-images/base-single-wheel.png',
      price: 299.95
    },
    {
      title: 'Base: Rocket',
      imageUrl: '/app/products/product-images/base-rocket.png',
      price: 499.95
    },
    {
      title: 'Torso: Small Gauge',
      imageUrl: '/app/products/product-images/torso-small-gauge.png',
      price: 499.95
    },
    {
      title: 'Head: Friendly',
      imageUrl: '/app/products/product-images/head-friendly.png',
      price: 450.00
    },
    {
      title: 'Torso: Large Gauge',
      imageUrl: '/app/products/product-images/torso-large-gauge.png',
      price: 499.95
    },
    {
      title: 'Arm: Dual Claw',
      imageUrl: '/app/products/product-images/arm-dual-claw.png',
      price: 250.00
    },
    {
      title: 'Base: Spring',
      imageUrl: '/app/products/product-images/base-spring.png',
      price: 299.95
    },
    {
      title: 'Arm: Propeller',
      imageUrl: '/app/products/product-images/arm-propeller.png',
      price: 399.95
    },
    {
      title: 'Head: Shredder',
      imageUrl: '/app/products/product-images/head-shredder.png',
      price: 699.95
    },
    {
      title: 'Arm: Stubby Claw',
      imageUrl: '/app/products/product-images/arm-stubby-claw.png',
      price: 150.00
    },
    {
      title: 'Base: Dual Wheel',
      imageUrl: '/app/products/product-images/base-dual-wheel.png',
      price: 299.95
    },
    {
      title: 'Base: Roller',
      imageUrl: '/app/products/product-images/base-roller.png',
      price: 299.95
    },
    {
      title: 'Head: One Eyed Jack',
      imageUrl: '/app/products/product-images/head-cyclops-shredder.png',
      price: 299.95
    },
    {
      title: 'Torso: Pouch',
      imageUrl: '/app/products/product-images/torso-pouch.png',
      price: 399.95
    },
  ];
}
