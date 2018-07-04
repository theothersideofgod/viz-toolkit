import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBasicComponent, buttonBasicData } from './button-basic/button-basic.component';

export const ALL_EXAMPLE_ITEMS = {
  'button-basic' : {
    component: ButtonBasicComponent,
    data: buttonBasicData
  }
}

@NgModule({
  declarations: [
    ButtonBasicComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [ButtonBasicComponent]
})
export class ExampleModule { }