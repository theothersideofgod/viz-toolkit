import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';
@Component({
  selector: 'viz-breadcrumb',
  templateUrl: './viz-breadcrumb.component.html',
  styleUrls: ['./viz-breadcrumb.component.scss']
})
export class VizBreadcrumbComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
