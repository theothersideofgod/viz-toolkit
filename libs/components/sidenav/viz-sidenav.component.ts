import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'viz-sidenav',
  templateUrl: './viz-sidenav.component.html',
  styleUrls: ['./viz-sidenav.component.scss']
})
export class VizSidenavComponent implements OnInit {

  @Input('navList') navList;


  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
