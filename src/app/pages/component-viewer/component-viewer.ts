import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  NgModule,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
 } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { ActivatedRoute, Params, Router, RouterModule, NavigationEnd } from '@angular/router';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { DocViewerModule } from '../../shared/doc-viewer/doc-viewer-module';
import { DocItem, DocumentationItems } from '../../shared/documentation-items/documentation-items';
import { TableOfContents } from '../../shared/table-of-contents/table-of-contents';
import { TableOfContentsModule } from '../../shared/table-of-contents/table-of-contents.module';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.html',
  styleUrls: ['./component-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentViewer implements OnDestroy, OnInit {
  componentDocItem: DocItem;
  sections: Set<string> = new Set(['overview', 'api']);
  private _destroyed = new Subject();

  constructor(_route: ActivatedRoute,
              private router: Router,
              public docItems: DocumentationItems,
              ) {
    // Listen to changes on the current route for the doc id (e.g. button/checkbox)
    combineLatest(_route.params).pipe(
        map((p:any) => ({id: p[0]['id']})),
        map((p:any) => ({doc: docItems.getItemById(p.id)}),
        takeUntil(this._destroyed))
        ).subscribe(d => {
          this.componentDocItem = d.doc;
          if (this.componentDocItem) {
          } else {
            this.router.navigate(['/components']);
          }
        });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }
}

@Component({
  selector: 'component-overview',
  templateUrl: './component-overview.html',
  encapsulation: ViewEncapsulation.None,
})
export class ComponentOverview implements OnInit {
  @ViewChild('intialFocusTarget') focusTarget: ElementRef;
  @ViewChild('toc') tableOfContents: TableOfContents;
  showToc: Observable<boolean>;

  constructor(public componentViewer: ComponentViewer, breakpointObserver: BreakpointObserver) {
    this.showToc = breakpointObserver.observe('(max-width: 1200px)')
      .pipe(map(result => !result.matches));
  }

  ngOnInit() {
    // 100ms timeout is used to allow the page to settle before moving focus for screen readers.
    setTimeout(() => this.focusTarget.nativeElement.focus(), 100);
  }

  onContentLoaded() {
    setTimeout(() => {
      this.focusTarget.nativeElement.focus();
      if (this.tableOfContents) {
        this.tableOfContents.updateScrollPosition();
      }
    }, 100);

  }
}

@NgModule({
  imports: [
    MatTabsModule,
    RouterModule,
    DocViewerModule,
    CommonModule,
    TableOfContentsModule,
  ],
  exports: [ComponentViewer],
  declarations: [ComponentViewer, ComponentOverview],
  providers: [DocumentationItems],
})
export class ComponentViewerModule {}

