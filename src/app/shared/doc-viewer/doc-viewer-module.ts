import { DocViewer } from './doc-viewer';
import { ExampleViewer } from '../example-viewer/example-viewer';
import {
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderLink } from './header-link';

import { CopierService } from '../copier/copier.service';
import { DocViewerExtend } from './doc-viewer-extend';

// ExampleViewer is included in the DocViewerModule because they have a circular dependency.
@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTabsModule,
    CommonModule,
    PortalModule
  ],
  providers: [CopierService],
  declarations: [DocViewer, ExampleViewer, HeaderLink, DocViewerExtend],
  entryComponents: [ExampleViewer, HeaderLink, DocViewerExtend],
  exports: [DocViewer, ExampleViewer, HeaderLink, DocViewerExtend]
})
export class DocViewerModule {}
