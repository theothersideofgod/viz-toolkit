import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'viz-svg-viewer',
  template: '<div class="viz-svg-viewer" aria-hidden="true"></div>'
})
export class SvgViewer implements OnInit {
  @Input()
  src: string;
  @Input()
  scaleToContainer: boolean;

  constructor(private elementRef: ElementRef, private http: HttpClient) {}

  ngOnInit() {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(template) {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      const svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  }

  private fetchAndInlineSvgContent(path: string): void {
    this.http.get(path, { responseType: 'text' }).subscribe(svgResponse => {
      this.inlineSvgContent(svgResponse);
    });
  }
}

@NgModule({
  exports: [SvgViewer],
  declarations: [SvgViewer]
})
export class SvgViewerModule {}
