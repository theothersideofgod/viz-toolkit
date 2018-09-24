import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-application',
  templateUrl: 'header-application.component.html',
  styleUrls: ['header-application.component.css']
})
export class HeaderApplicationComponent implements OnInit {
  ngOnInit() {}
}

export const HeaderApplicationData = {
  name: 'HeaderApplication'
};
