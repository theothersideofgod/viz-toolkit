import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viz-steppers',
  templateUrl: './viz-steppers.component.html',
  styleUrls: ['./viz-steppers.component.scss']
})
export class VizSteppersComponent implements OnInit {
  @Input() steps;
  constructor() { }

  ngOnInit() {
  }

}
