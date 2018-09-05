import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'doc-viewer-extend',
  template: `
   <span *ngIf="!showAllExamples">View All Examples</span>
   <span *ngIf="showAllExamples">Hide All Examples</span>
  `
})
export class DocViewerExtend implements OnInit {
  @Input()
  example: string;

  showAllExamples: boolean = false;

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
    console.log(this.example);
    this.hide();
  }

  show(): void {
    this.document.querySelector(`#${this.example}`).style.display = 'block';
  }
  hide(): void {
    this.document.querySelector(`#${this.example}`).style.display = 'none';
  }
}
