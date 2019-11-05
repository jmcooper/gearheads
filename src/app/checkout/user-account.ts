import { Address } from './address/address';

export class UserAccount {
  shippingAddress:Address;
  billingAddress:Address;
  constructor(shippingAddress:Address = new Address(), billingAddress:Address = new Address()) {
    this.shippingAddress = shippingAddress;
    this.billingAddress = billingAddress;
  }
}