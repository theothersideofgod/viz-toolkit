import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  NgModule
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-demo-viewport',
  templateUrl: './demo-viewport.component.html',
  styleUrls: ['./demo-viewport.component.scss']
})
export class DemoViewportComponent implements OnInit {
  exampleURL;
  viewport;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);

      this.exampleURL = `/demo/#/example/${params['name']}`;
    });
  }

  ngOnInit() {}

  changeViewport(vp) {
    this.viewport = vp;
  }

  viewportStyle() {
    const vpobj = {};
    const vps = ['Desktop', 'Mobile', 'Tablet'];
    vps.forEach(v => {
      vpobj[v] = `viewport-${v}`;
    });
    return vpobj[this.viewport];
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [DemoViewportComponent, SafePipe],
  declarations: [SafePipe, DemoViewportComponent]
})
export class DemoViewportModule {}
