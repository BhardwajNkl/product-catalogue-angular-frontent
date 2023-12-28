import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loginStatus:boolean=true;
  userEmail:string="";
  constructor(private router: Router, private authenticator: AuthenticationService){
    this.loginStatus=this.authenticator.isLoggedIn();
    if(this.loginStatus){
      let email = this.authenticator.getUserEmail();
      if(email==null){
        this.userEmail="";
      } else{
        this.userEmail=email.toString();
      }
    }
  }
  onLogOut(){
    //clear login data
    this.authenticator.logOut();
    this.loginStatus=false;
  }
}
