import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username:string,password:string){
    if (username === "gowri" && password === "dummy"){
      sessionStorage.setItem('authenticateduser',username)
      return true;
    }
    return false;
  }

  isUserLoggedin(){
    let user = sessionStorage.getItem('authenticateduser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticateduser')
  }
}
