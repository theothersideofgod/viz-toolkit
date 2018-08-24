import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'viz-breadcrumb',
  templateUrl: './viz-breadcrumb.component.html',
  styleUrls: ['./viz-breadcrumb.component.css']
})
export class VizBreadcrumbComponent implements OnInit,AfterViewInit {
  constructor(private _router: Router, private _activeRoute: ActivatedRoute) {}

  ngOnInit() {}

  

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
      console.log(this._activeRoute.root)
  }

  
}
