import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'form-field-clear-button',
  templateUrl: 'form-field-clear-button.component.html',
  styleUrls: ['form-field-clear-button.component.css'],
})
export class FormFieldClearButtonComponent implements OnInit {
  value = 'Input here'
  ngOnInit() { }
}

export const FormFieldClearButtonData = {
	name: 'FormFieldClearButton'
}