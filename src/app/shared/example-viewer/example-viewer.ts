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


import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class IframeHeightService {
  iframeHeightMapper = {};
  setIframeHeight(iframeHeight) {
    this.iframeHeightMapper = {...this.iframeHeightMapper, ...iframeHeight};
  }
  getIframeHeightByName(name) {
    return this.iframeHeightMapper[name];
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

  constructor(private snackbar: MatSnackBar, private copier: CopierService, private iframeHeightService: IframeHeightService) {}

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

  ngOnInit() {
    window.addEventListener('message', (e) => {
      this.iframeHeightService.setIframeHeight(JSON.parse(e.data));
    });
  }

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
    // const relatedDatepickerExamples = [
    //   'date-picker-basic',
    //   'date-picker-single',
    //   'month-picker-range',
    //   'month-picker-single',
    //   'date-picker-single-error',
    //   'date-picker-start-date',
    //   'date-picker-selected-value',
    //   'date-picker-min-max-validation',
    //   'date-picker-filter-validation',
    //   'date-picker-emulating',
    //   'date-picker-range-validation',
    //   'dialog-content',
    // ];

    // if (relatedDatepickerExamples.indexOf(this._example) !== -1) {
    //   return viewportObj[this.platform] + ' datepicker-viewport';
    // }

    // if (['dialog-basic'].indexOf(this._example) !== -1) {
    //   return viewportObj[this.platform] + ' dialog-viewport';
    // }

    return viewportObj[this.platform];
  }

  getIframeStyle() {
    // const heightMapper = {
    //   'date-picker-basic': 550,
    //   'date-picker-single': 450,
    //   'month-picker-range': 450,
    //   'month-picker-single': 1000,
    //   'date-picker-single-error': 1000,
    //   'date-picker-start-date': 450,
    //   'date-picker-selected-value': 450,
    //   'date-picker-min-max-validation': 450,
    //   'date-picker-filter-validation': 450,
    //   'date-picker-emulating': 450,
    //   'date-picker-range-validation': 550,
    //   'dialog-content': 700,
    //   'dialog-alert': 250,
    //   'dialog-basic': 650,
    //   'dialog-data': 250,
    //   'dialog-confirmation': 300,
    //   'dialog-complex': 300,
    //   'menu-basic': 240,
    //   'menu-icon': 240,
    //   'menu-nested': 240,
    //   'header-basic': 300,
    //   'header-application': 300,
    //   'expansion-panel-table': 300,
    //   'expansion-panel-angular': 300,
    //   'stepper-vertical': 300,
    //   'stepper-custom': 300,
    //   'select-basic': 250,
    //   'select-error-state': 250,
    //   'select-disable': 80,
    //   'select-group-option': 250,
    //   'select-multiple-selection': 300,
    //   'select-trigger-text': 300,
    //   'paginator-basic': 220,
    //   'table-native': 210,
    //   'nodata-basic': 230,
    //   'divider': 250,
    //   'form-field-autocomplete': 250,
    //   'form-field-autocomplete-icon': 250,
    //   'form-field-autocomplete-group': 350,
    //   'login-basic': 373,
    //   'bottomsheet-basic': 293,
    //   'tab': 153,
    //   'tabs-narrow': 153,
    //   'tabs-custom-label': 153,
    //   'tabs-theme': 153
    // };
    // if (heightMapper[this._example]) {
    //   return {
    //     height: `${heightMapper[this._example] - 15 + 56 + 56}px`
    //   };
    // } else {
    //   return {
    //     height: '160px'
    //   };
    // }
    // const height = this.iframeHeightService.getIframeHeightByName(this._example);
    // if (height) {
    //   return {
    //     'height': height + 'px'
    //   };
    // } else {
    //   return {
    //     'height': '112px'
    //   };
    // }

  }

}
