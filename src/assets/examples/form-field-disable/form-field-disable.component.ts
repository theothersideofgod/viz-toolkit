import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-field-disable',
  templateUrl: 'form-field-disable.component.html',
  styleUrls: ['form-field-disable.component.css']
})
export class FormFieldDisableComponent implements OnInit {
  value = 'Input here';
  ngOnInit() {}
}

export const FormFieldDisableData = {
  name: 'FormFieldDisable'
};
