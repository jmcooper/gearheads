import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'gh-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  @Input() billingAddress: any;
  @Input() shippingAddress: any;
  @Output() addressUpdated = new EventEmitter();

  updateAddress(addressInfo) {
    this.addressUpdated.emit(addressInfo);
  }
}