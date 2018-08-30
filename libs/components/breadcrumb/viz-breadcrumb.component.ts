import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';

interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'viz-breadcrumb',
  templateUrl: './viz-breadcrumb.component.html',
  styleUrls: ['./viz-breadcrumb.component.scss']
})
export class VizBreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: BreadCrumb[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.router.url
      .split('/')
      .slice(1)
      .map((route, index) => {
        return {
          label: route,
          url: `/${this.router.url.split('/').slice(1, index+2).join('/')}`,
        };
      });
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
