import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'form-field-basic',
	templateUrl: 'form-field-basic.component.html',
})

export class FormFieldBasicComponent implements OnInit {
	ngOnInit() { }
}

export const FormFieldBasicData = {
	name: 'Form field'
}