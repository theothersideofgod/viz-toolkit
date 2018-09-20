import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-basic',
  templateUrl: 'header-basic.component.html',
  styleUrls: ['header-basic.component.scss']
})
export class HeaderBasicComponent implements OnInit {
  ngOnInit() {}
}

export const HeaderBasicData = {
  name: 'HeaderBasic'
};
