import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit,
  isDevMode,
  Pipe,
  PipeTransform
} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ComponentPortal } from '@angular/cdk/portal';

import { ALL_EXAMPLE_ITEMS } from '../../../assets/examples';
import { CopierService } from '../copier/copier.service';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'example-viewer',
  templateUrl: './example-viewer.html',
  styleUrls: ['./example-viewer.scss']
})
export class ExampleViewer implements OnInit {
  /** Component portal for the currently displayed example. */
  selectedPortal: ComponentPortal<any>;

  /** String key of the currently displayed example. */
  _example: string;

  exampleData: any;

  /** Whether the source for the example is being displayed. */
  showSource = false;

  // lucas
  platform = 'desktop_mac';
  copyFocus = false;
  @ViewChild('iframe')
  iframe: ElementRef;
  @ViewChild('exampleViewBody')
  exampleViewBody: ElementRef;
  // lucas
  exampleURL: string;

  datePickerRelatedExample = [
    'date-picker-basic',
    'date-picker-single',
    'month-picker-range',
    'month-picker-single'
  ];

  constructor(private snackbar: MatSnackBar, private copier: CopierService) {}

  get example() {
    return this._example;
  }

  @Input()
  set example(example: string) {
    if (example && ALL_EXAMPLE_ITEMS[example]) {
      console.log(isDevMode());
      this._example = example;
      this.exampleURL = isDevMode()
        ? `http://localhost:4400/demo/#/example/${example}`
        : `/demo/index.html#/example/${example}`;
      this.exampleData = ALL_EXAMPLE_ITEMS[example];
      this.selectedPortal = new ComponentPortal(this.exampleData.component);
    } else {
      console.log('MISSING EXAMPLE: ', example);
    }
  }

  toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  exampleFileUrl(extension: string) {
    return `/assets/examples/${this.example}/${
      this.example
    }.example.${extension.toLowerCase()}${
      extension.toLowerCase() === 'html' ? '' : '.html'
    }`;
  }

  ngOnInit() {}

  getViewportClass() {
    return `${this._example} ${this.platform}`;
  }

  copySource() {
    this.copyFocus = false;
  }

  iframeClass() {
    const viewport = ['desktop_mac', 'tablet_mac', 'phone_iphone'];
    const viewportObj = {};
    viewport.forEach(vp => {
      viewportObj[vp] = `viewport_${vp}`;
    });

    // datepicker too big, viewport need to be more higher
    const relatedDatepickerExamples = [
      'date-picker-basic',
      'date-picker-single',
      'month-picker-range',
      'month-picker-single',
      'date-picker-single-error'
    ];

    if (relatedDatepickerExamples.indexOf(this._example) !== -1) {
      return viewportObj[this.platform] + ' datepicker-viewport';
    }

    if (['dialog-basic'].indexOf(this._example) !== -1) {
      return viewportObj[this.platform] + ' dialog-viewport';
    }

    return viewportObj[this.platform];
  }
}
