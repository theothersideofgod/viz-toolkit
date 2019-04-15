import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-basic',
  templateUrl: 'footer-basic.component.html',
  styleUrls: ['footer-basic.component.scss']
})
export class FooterBasicComponent implements OnInit {
  options = [
    {
      id: 1,
      title: 'Contact',
      link: ''
    },
    {
      id: 2,
      title: 'Vizient',
      link: ''
    }
  ];
  ngOnInit() {}
}

export const FooterBasicData = {
  name: 'FooterBasic'
};
