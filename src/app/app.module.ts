import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercerptorsBasicAuthService } from './service/http/http-intercerptors-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    TodoListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercerptorsBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
