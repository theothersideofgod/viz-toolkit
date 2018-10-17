import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'doc-viewer-extend',
  template: `
   <span *ngIf="!showAllExamples">View All Examples</span>
   <span *ngIf="showAllExamples">Show Less Examples</span>
  `
})
export class DocViewerExtend implements OnInit {
  @Input()
  example: string;

  showAllExamples = false;

  constructor(@Inject(DOCUMENT) private document: any) {}
  @HostListener('click')
  toggle() {
    if (!this.showAllExamples) {
      this.show();
    } else {
      this.hide();
    }
    this.showAllExamples = !this.showAllExamples;
  }

  ngOnInit(): void {
    // console.log(this.example);
    this.hide();
  }

  show(): void {
    // this.document.querySelector(`#${this.example}`).style.display = 'block';
    this.document.querySelector(`#${this.example}`).classList.remove('hide-document');
  }
  hide(): void {
    // this.document.querySelector(`#${this.example}`).style.display = 'none';
    this.document.querySelector(`#${this.example}`).classList.add('hide-document');
  }
}
