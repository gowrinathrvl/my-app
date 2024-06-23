import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const  AUTHORISED_USER = 'authenticateduser';
export const TOKEN_HEADER_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }
  authenticate(username:string,password:string){
    if (username === "gowri" && password === "dummy"){
      sessionStorage.setItem('authenticateduser',username)
      return true;
    }
    return false;
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHORISED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN_HEADER_KEY);
    else
      return null
  }

  isUserLoggedin(){
    let user = sessionStorage.getItem(AUTHORISED_USER)
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem(AUTHORISED_USER);
    sessionStorage.removeItem(TOKEN_HEADER_KEY);
  }
  executeAuthenticationService(username:string,password:string): Observable<any>{
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let header = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers:header}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHORISED_USER,username);
          sessionStorage.setItem(TOKEN_HEADER_KEY,basicAuthHeaderString);
          return data
        }
      )
    )
    // console.log("Execute Hello world Bean Service");
  }
 
}

export class AuthenticationBean{
  constructor(public message: string){}
}
