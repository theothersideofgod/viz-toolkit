import { HomepageComponent } from './pages/homepage/homepage';
import { PrinciplesComponent } from './pages/principles/principles.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav';
// import { ComponentList } from './pages/component-list';
// import { GuideList } from './pages/guide-list';
import { Routes } from '@angular/router';
import { 
  ComponentViewer,
  ComponentOverview
 } from './pages/component-viewer/component-viewer';
import { ComponentsComponent } from './pages/components/components.component';

export const APP_ROUTES: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full', data: {}},
  {
    path: 'documentation',
    component: ComponentSidenavComponent,
    children: [
      {path: '', redirectTo: 'designers', pathMatch: 'full'},
      // {
      //   path: 'categories',
      //   children: [
      //     {path: '', component: ComponentCategoryList},
      //     {path: ':id', component: ComponentList},
      //   ],
      // },
      {
        path: ':id',
        component: ComponentViewer,
        children: [
          {path: '', redirectTo: 'overview', pathMatch: 'full'},
          {path: 'overview', component: ComponentOverview, pathMatch: 'full'},
          {path: '**', redirectTo: 'overview'},
        ],
      },
    ],
  },
  {path: 'principles', component: PrinciplesComponent, pathMatch: 'full', data: {}},
  {path: 'components', component: ComponentsComponent, pathMatch: 'full', data: {}},
  {path: '**', redirectTo: ''}
];
