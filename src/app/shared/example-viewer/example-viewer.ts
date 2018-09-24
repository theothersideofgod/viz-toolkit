import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit
} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ComponentPortal } from '@angular/cdk/portal';

import { ALL_EXAMPLE_ITEMS } from '../../../assets/examples';
import { CopierService } from '../copier/copier.service';

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

  constructor(private snackbar: MatSnackBar, private copier: CopierService) {}

  get example() {
    return this._example;
  }

  @Input()
  set example(example: string) {
    if (example && ALL_EXAMPLE_ITEMS[example]) {
      this._example = example;
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
}
