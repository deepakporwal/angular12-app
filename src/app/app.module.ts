import { MatModule } from './mat/mat.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SampleDemoComponent } from './sample-demo/sample-demo.component';
import { LoginComponent } from './login/login.component';

import { UsersComponent } from './users/users.component';
import { UsersState } from './store/state/user.state';
import { SingleUserComponent } from './single-user/single-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HtmlBasicsComponent } from './html-basics/html-basics.component';
import { MaterialExamplesComponent } from './material-examples/material-examples.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleReactFormComponent } from './sample-react-form/sample-react-form.component';
import { BlankComponent } from './blank/blank.component';
import { SampleRxjsComponent } from './sample-rxjs/sample-rxjs.component';




@NgModule({
  declarations: [					
    AppComponent,
      HeaderComponent,
      SampleDemoComponent,
      LoginComponent,
      UsersComponent,
      SingleUserComponent,
      HtmlBasicsComponent,
      MaterialExamplesComponent,
      SampleReactFormComponent,
      BlankComponent,
      SampleRxjsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    NgxsModule.forRoot([UsersState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule

  
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
