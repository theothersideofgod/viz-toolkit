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
import { ModifiedLabel } from '../modified-label/modified-label'
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
    SafePipe,
    ModifiedLabel
  ],
  entryComponents: [ExampleViewer, HeaderLink, DocViewerExtend, SketchLink, ModifiedLabel],
  exports: [DocViewer, ExampleViewer, HeaderLink, DocViewerExtend, SketchLink, SafePipe, ModifiedLabel]
})
export class DocViewerModule {}
