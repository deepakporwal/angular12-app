# Angular12

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Commands to add NgXs store and its dependencies

1.npm install @ngxs/store --save
2.npm install @ngxs/store@dev --save
3.npm install @ngxs/logger-plugin@dev --save
4.install redux dev tools in the chrome

Changes in App.module.ts

    NgxsModule.forRoot([]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()


Basic funda for creating store
1) First step is to create an Action (any of the crud operation) static readonly type = Action name
2) Second if want to return the data from store then create selector decorator for that Action @Select
3) Third create an Action method in state class using @Action decorator