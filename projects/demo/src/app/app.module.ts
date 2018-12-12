import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './pages/demo/demo.component';
import { DemolistComponent } from './pages/demolist/demolist.component';
import { Routes, RouterModule } from '@angular/router';
import { ExampleModule } from 'src/assets/examples';
import { DemoViewportModule, DemoViewportComponent } from './pages/demo-viewport/demo-viewport.component';
import { MatTabsModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: DemolistComponent
  },
  {
    path: 'example/:name',
    component: DemoComponent
  },
  {
    path: 'viewport/:name',
    component: DemoViewportComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemolistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ExampleModule,
    MatTabsModule,
    DemoViewportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
