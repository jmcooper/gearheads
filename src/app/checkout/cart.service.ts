export class CartService {
  cart: any = [];

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    this.cart.push(product);
  }
}