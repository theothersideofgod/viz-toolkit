import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './routes';
import { ExampleModule } from '../assets/examples';
import { MaterialModule } from './material.module';

import { HomepageModule } from './pages/homepage/homepage';
import { PrinciplesModule } from './pages/principles/principles.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav';
import { ComponentViewerModule } from './pages/component-viewer/component-viewer';
import { HttpClientModule } from '@angular/common/http';
import { VizHeaderModule, VizFooterModule } from 'libs';
import { ComponentsModule } from './pages/components/components.component';
import { HttpStatusPageModule } from './pages/http-status-page/http-status-page.component';
// import { VizHeaderMudule, VizFooterMudule } from 'viz-toolkit';

@NgModule({
  declarations: [
    AppComponent,
    ComponentSidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    ExampleModule,
    RouterModule.forRoot(APP_ROUTES),
    HomepageModule,
    ComponentViewerModule,
    MaterialModule,
    VizHeaderModule,
    VizFooterModule,
    PrinciplesModule,
    ComponentsModule,
    HttpStatusPageModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
