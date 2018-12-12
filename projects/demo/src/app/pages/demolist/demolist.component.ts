import { Component, OnInit } from '@angular/core';
import { ALL_EXAMPLE_ITEMS } from '../../../../../../src/assets/examples/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demolist',
  templateUrl: './demolist.component.html',
  styleUrls: ['./demolist.component.css']
})
export class DemolistComponent implements OnInit {
  items;
  constructor(private router: Router) { }

  ngOnInit() {
    this.items = Object.keys(ALL_EXAMPLE_ITEMS);
  }
  navigateTo(item) {
    this.router.navigate([`/example/${item}`]);
  }
  navigateToViewport(item) {
    this.router.navigate([`/viewport/${item}`]);
  }
}
