import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-button-basic',
  templateUrl: 'radio-button-basic.component.html',
  styleUrls: ['radio-button-basic.component.scss']
})
export class RadioButtonBasicComponent implements OnInit {
  ngOnInit() {}
}

export const RadioButtonBasicData = {
  name: 'Radio button'
};
