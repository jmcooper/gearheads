export class Product {
  title;
  image;
  price;
  discountPercent;

  constructor(title, image, price, discountPercent=0) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.discountPercent = discountPercent;
  }

  get imageUrl() {
    return '/app/products/product-images/' + this.image;
  }

  get priceWithDiscount() {
    return this.price * (1-this.discountPercent);
  }
}