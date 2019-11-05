import { Component, Input } from "@angular/core";

@Component({
  selector: 'gh-address-display',
  templateUrl: './address-display.component.html',
  styleUrls: ['./address-display.component.css']
})
export class AddressDisplayComponent {
  @Input() addressType: any;
  @Input() address: any;
  
}