# VizientToolkit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Getting started

For help getting started with a new Angular app, check out the [Angular CLI](https://https://cli.angular.io/). For existing apps, follow these steps to begin using Vizient Toolkit.

### Step 1: Install Vizient ToolKit link

Cause Vizient Toolkit is not published into npm. You have to install it via local file.

#### Put libs/viz-toolkit in root folder. Add this line into your package.json.

```
"viz-toolkit": "file:./libs/viz-toolkit",
```

#### Run npm/yarn install.

```
"viz-toolkit": "file:./libs/viz-toolkit",
```

### Step 2: Include CSS 

Import the basic theme viz-toolkit provides

#### Put this line into angular.json

```
"styles": ["node_modules/viz-toolkit/themes/index.theme.css", "src/styles.css"]
```

### Step 3: Import the component modules link

Import the component modules.

```
    import { 
      VizHeaderModule,
      VizDateRangePickerModule,
      VizSelectModule,
      VizFooterModule,
      VizMenuModule,
      VizCheckboxModule,
      VizButtonModule,
      VizFormFieldModule,
      VizTreeModule,
      VizSliderModule,
      VizExpansionModule,
      VizToolbarModule,
      VizIconModule,
      VizListModule,
      VizChipModule,
      VizBadgeModule,
      VizTabsModule,
      VizDialogModule,
      VizLoginModule,
      VizNodataModule,
      VizFeedbackIndicatorModule,
      VizSidenavModule,
      VizProgressSpinnerModule,
      VizTableModule,
      VizSteppersModule
    } from 'viz-toolkit';
    @NgModule({
      ...
      imports: [
        VizHeaderModule,
        VizDateRangePickerModule,
        VizSelectModule,
        VizFooterModule,
        VizMenuModule,
        VizCheckboxModule,
        VizButtonModule,
        VizFormFieldModule,
        VizTreeModule,
        VizSliderModule,
        VizExpansionModule,
        VizToolbarModule,
        VizIconModule,
        VizListModule,
        VizChipModule,
        VizBadgeModule,
        VizTabsModule,
        VizDialogModule,
        VizLoginModule,
        VizNodataModule,
        VizFeedbackIndicatorModule,
        VizSidenavModule,
        VizProgressSpinnerModule,
        VizTableModule,
        VizSteppersModule
      ],
      ...
    })
    export class AppModule { }
```

### Step 4: Animations

Some Material components depend on the Angular animations module in order to be able to do more advanced transitions. If you want these animations to work in your app, you have to install the @angular/animations

#### NPM

```
npm install --save @angular/animations
```

```
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

    @NgModule({
      ...
      imports: [BrowserAnimationsModule],
      ...
    })
    export class AppModule { }
```

### Step 5: Add Material Icons 

If you want to use the mat-icon component with the official [Material Design Icons](https://material.io/tools/icons/?style=baseline), load the icon font in your index.html.

#### Put this line into angular.json

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build:lib

Run `npm run build:lib` to build the toolkit library. The build artifacts will be stored in the `libs/viz-toolkit` directory. Use the library `import { VizHeaderModule } from 'viz-toolkit'`

Setting package.json

```
"devDependencies": {
  ...,
  "viz-toolkit":"file:./libs/viz-toolkit"
  ...,    
},
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
