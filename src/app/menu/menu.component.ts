import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn: boolean = false;
  constructor(public auth:HardcodedAuthenticationService ){
  }
  ngOnInit(): void {
    //  this.isUserLoggedIn = this.auth.isUserLoggedin();
  }
}
