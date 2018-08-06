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
      link: 'Contact'
    },
    {
      id: 2,
      title: 'Vizient',
      link: 'Vizient'
    },
    {
      id: 3,
      title: 'Additional Brands',
      link: 'Additional Brands'
    }
  ];
  ngOnInit() {}
}

export const FooterBasicData = {
  name: 'FooterBasic'
};
