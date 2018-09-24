import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-nested',
  templateUrl: 'menu-nested.component.html',
  styleUrls: ['menu-nested.component.css']
})
export class MenuNestedComponent implements OnInit {
  ngOnInit() {}

  seachOnClick() {}
}

export const MenuNestedData = {
  name: 'MenuNested'
};
