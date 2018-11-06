import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'customer-select',
  templateUrl: 'customer-select.component.html',
  styleUrls: ['customer-select.component.css'],
})
export class CustomerSelectComponent implements OnInit {
  ngOnInit() { }
}

export const CustomerSelectData = {
	name: 'CustomerSelect'
}