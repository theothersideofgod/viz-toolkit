import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

/** @title Auto-resizing textarea */
@Component({
  selector: 'text-field-autosize-textarea',
 templateUrl: 'text-field-autosize-textarea.component.html',
 styleUrls: ['text-field-autosize-textarea.component.css'],
})
export class TextFieldAutosizeTextareaComponent {
  constructor(private ngZone: NgZone) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
