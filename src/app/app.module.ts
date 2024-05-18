import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './welcome/auth/auth.component';
import { LocalComponent } from './local/local.component';
import { TestComponent } from './src/app/welcome/auth/test/test.component';
import { InsideTestComponent } from './welcome/auth/test/inside-test/inside-test.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthComponent,
    LocalComponent,
    TestComponent,
    InsideTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
