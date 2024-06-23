import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username ="gowri"
  password =''
  errorMessage='Invalid credentials !! '
  invalidLogin = false

  constructor(private router:Router, private auth: HardcodedAuthenticationService,
    private basicAuth: BasicAuthenticationService){

  }

  handleLogin(){
    // if (this.username === "gowri" && this.password === "dummy"){
      if (this.auth.authenticate(this.username, this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin(){
  this.basicAuth.executeAuthenticationService(this.username, this.password)
    .subscribe(
      (data: { message: string }) => {
        console.log(data.message)
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false
      },
      (error: HttpErrorResponse) => {
        console.log(error)
        this.invalidLogin = true
      }
    )
      
  }
}
