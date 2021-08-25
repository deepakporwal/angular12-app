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
import { FormsModule } from '@angular/forms';
import { HtmlBasicsComponent } from './html-basics/html-basics.component';


@NgModule({
  declarations: [					
    AppComponent,
      HeaderComponent,
      SampleDemoComponent,
      LoginComponent,
      UsersComponent,
      SingleUserComponent,
      HtmlBasicsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([UsersState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
