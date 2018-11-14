import { DocViewer } from './doc-viewer';
import { ExampleViewer, SafePipe } from '../example-viewer/example-viewer';
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
import { SketchLink } from '../sketch-link/sketch-link';

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
  declarations: [
    DocViewer,
    ExampleViewer,
    HeaderLink,
    DocViewerExtend,
    SketchLink,
    SafePipe
  ],
  entryComponents: [ExampleViewer, HeaderLink, DocViewerExtend, SketchLink],
  exports: [DocViewer, ExampleViewer, HeaderLink, DocViewerExtend, SketchLink, SafePipe]
})
export class DocViewerModule {}
