import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-field-hint',
  templateUrl: 'form-field-hint.component.html',
  styleUrls: ['form-field-hint.component.css']
})
export class FormFieldHintComponent implements OnInit {
  value = '';
  ngOnInit() {}
}

export const FormFieldHintData = {
  name: 'FormFieldHint'
};
