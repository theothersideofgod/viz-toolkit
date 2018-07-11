import { Component, OnInit, AfterContentInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'
import { SvgViewerModule } from '../../shared/svg-viewer/svg-viewer'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {

  constructor() { }

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
