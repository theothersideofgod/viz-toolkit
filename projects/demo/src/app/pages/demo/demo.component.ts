import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALL_EXAMPLE_ITEMS } from '../../../../../../src/assets/examples/index';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  selectedExample;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedExample = ALL_EXAMPLE_ITEMS[params['name']];
    });
  }

  ngOnInit() {
  }

}
