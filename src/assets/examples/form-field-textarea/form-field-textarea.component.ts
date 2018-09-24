import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-field-textarea',
  templateUrl: 'form-field-textarea.component.html',
  styleUrls: ['form-field-textarea.component.css']
})
export class FormFieldTextareaComponent implements OnInit {
  value =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.';
  ngOnInit() {}
}

export const FormFieldTextareaData = {
  name: 'FormFieldTextarea'
};
