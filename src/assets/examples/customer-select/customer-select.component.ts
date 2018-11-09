import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-select',
  templateUrl: 'customer-select.component.html',
  styleUrls: ['customer-select.component.css']
})
export class CustomerSelectComponent implements OnInit {
  ngOnInit() {}
  menuClose() {
    alert('close');
  }
  menuOpen() {
    alert('open');
  }
}

export const CustomerSelectData = {
  name: 'CustomerSelect'
};
