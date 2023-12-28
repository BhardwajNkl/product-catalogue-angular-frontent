import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private authenticator: AuthenticationService, private router: Router){

  }
  onLoginSubmit(formData:any){

    if(formData.valid){
      //do further process
      let cerdential = formData.value;
      this.authenticator.login(cerdential).subscribe(
        (data:any)=>{
          this.authenticator.setLoginInfo(data.accessToken,data.userEmail);       
          //redirect to home
          this.router.navigate(['home'])
        },
        error=>{
          alert("Wrong Credentials! Try again!")
        }
      )

    } else{
      alert("Please fill the required fields");
    }
  }
}
