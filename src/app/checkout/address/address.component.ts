import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'gh-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() addressType: any;
  @Input() address: any;
  @Output() addressUpdated = new EventEmitter();
  editing:boolean = false;

  get editMode() {
    return this.editing || !this.addressComplete;
  }

  set editMode(value) {
    this.editing = value;
  }

  updateAddress(addressInfo) {
    this.addressUpdated.emit(addressInfo);
    this.editMode = false;
  }

  get addressComplete() {
    return !!this.address &&
      this.address.streetAddress != '' && 
      this.address.city != '' &&
      this.address.state != '' &&
      this.address.postalCode != '';
  }
  
}