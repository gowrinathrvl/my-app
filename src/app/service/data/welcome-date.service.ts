import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDateService {

  constructor(
    private http : HttpClient
  ) { }
  executeHelloWorldBeanServie(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    // console.log("Execute Hello world Bean Service");
  }
  
  executeHelloWorldBeanWithPathvariable(name:string){
    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    // let header = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`
    // ,{headers:header}
    )
    // console.log("Execute Hello world Bean Service");
  }
  // createBasicAuthHttpHeader(){
  //   let username = 'gowri'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
  //   return basicAuthHeaderString
  // }
}
