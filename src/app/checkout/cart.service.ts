import { Product } from '../products/product';

export class CartService {
  cart: any = [];

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    this.cart.push(new Product(product.title, product.image, product.price, product.discountPercent));
  }
}