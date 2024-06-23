import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDateService } from '../service/data/welcome-date.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  name=''
  welcomeMessageFromService:String = '';
  
  constructor(private router:ActivatedRoute,
    private service: WelcomeDateService){
    this.router.snapshot.params['name']
    this.name = this.router.snapshot.params['name']
  }

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanServie());
    this.service.executeHelloWorldBeanServie().subscribe(
      response => this.handleSucessfulResponce(response),
      error => this.handleErrorresponse(error)
      // response => console.log(response.message)
    );
    // console.log('Last line of getWelcomeMessage()')
  }
  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldBeanServie());
    this.service.executeHelloWorldBeanWithPathvariable(this.name).subscribe(
      response => this.handleSucessfulResponce(response),
      error => this.handleErrorresponse(error)
      // response => console.log(response.message)
    );
    // console.log('Last line of getWelcomeMessage()')
  }

  handleSucessfulResponce(response:HelloWorldBean){
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message
  }

  handleErrorresponse(error:any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

}
