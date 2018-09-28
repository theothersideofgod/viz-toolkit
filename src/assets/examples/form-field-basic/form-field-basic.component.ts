import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-field-basic',
  templateUrl: 'form-field-basic.component.html',
  styleUrls: ['form-field-basic.component.scss']
})
export class FormFieldBasicComponent implements OnInit {
  value = '';
  ngOnInit() {}
}

export const FormFieldBasicData = {
  name: 'Form field'
};
