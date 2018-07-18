import { Component, OnInit, AfterContentInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'
import { SvgViewerModule } from '../../shared/svg-viewer/svg-viewer'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {

  constructor(
    private _router: ActivatedRoute
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

}

@NgModule({
  imports: [MatButtonModule, SvgViewerModule],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
