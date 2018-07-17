import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-basic',
  templateUrl: './checkbox-basic.component.html',
  styleUrls: ['./checkbox-basic.component.css']
})
export class CheckboxBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const CheckboxBasicData = {
  name: 'Checkbox'
}