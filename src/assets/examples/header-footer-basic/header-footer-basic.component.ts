import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'header-footer-basic',
  templateUrl: 'header-footer-basic.component.html',
  styleUrls: ['./header-footer-basic.component.scss']
})

export class HeaderFooterBasicComponent implements OnInit {

  ngOnInit() { }
  
  options = [
    {
      "id": 1,
      "title": "Contact",
      "link": "Contact"
    },
    {
      "id": 2,
      "title": "Vizient",
      "link": "Vizient"
    },
    {
      "id": 3,
      "title": "Additional Brands",
      "link": "Additional Brands"
    }
  ]
}

export const HeaderFooterBasicData = {
  name: 'Header Footer'
}