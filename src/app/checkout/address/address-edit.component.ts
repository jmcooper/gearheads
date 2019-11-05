import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Address } from './address';

@Component({
  selector: 'gh-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent {
  @Input() addressType: string;
  @Input() address: Address;
  @Output() addressUpdated = new EventEmitter();

  ngOnInit() {
    this.address = this.address ? 
      new Address(
        this.address.name, 
        this.address.streetAddress, 
        this.address.city, 
        this.address.state, 
        this.address.postalCode) :
      new Address();
  }
  save() {
    this.addressUpdated.emit({addressType: this.addressType, address: this.address});
  }  
}