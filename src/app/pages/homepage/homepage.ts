import { Component, OnInit, AfterContentInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'
import { SvgViewerModule } from '../../shared/svg-viewer/svg-viewer'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {

  constructor(
    private _router: ActivatedRoute,
    private _route: Router
  ) {
    this._router.params.subscribe(params => {
      console.log('home params', params)
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    window[`__svgFunc`]();
  }

  routeTo(route) {
    this._route.navigate([route])
  }
  

}

@NgModule({
  imports: [MatButtonModule, SvgViewerModule],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
