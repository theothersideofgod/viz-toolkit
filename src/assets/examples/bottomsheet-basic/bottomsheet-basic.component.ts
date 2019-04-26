import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'bottomsheet-basic',
  templateUrl: 'bottomsheet-basic.component.html',
  styleUrls: ['bottomsheet-basic.component.css']
})
export class BottomsheetBasicComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  ngOnInit() {}
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <mat-nav-list>
      <a
        href="https://keep.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Keep</span>
        <span mat-line>Add to a note</span>
      </a>

      <a
        href="https://docs.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Docs</span>
        <span mat-line>Embed in a document</span>
      </a>

      <a
        href="https://plus.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Plus</span>
        <span mat-line>Share with your friends</span>
      </a>

      <a
        href="https://hangouts.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Hangouts</span>
        <span mat-line>Show to your coworkers</span>
      </a>
    </mat-nav-list>
  `
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
