import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent {
  actualUserData: any = {
  }
  constructor(private authenticator: AuthenticationService) {

  }
  onRegisterSubmit(formData: any) {
    let userData = formData.value;
    if (formData.valid && userData.password===userData.confirmPassword) {
      //only then proceed further for registration. else display error.


      this.actualUserData.email = userData.email;
      this.actualUserData.firstName = userData.firstName;
      this.actualUserData.lastName = userData.lastName;
      this.actualUserData.password = userData.password;
      this.authenticator.register(this.actualUserData).subscribe(
        (data: any) => {
          if (data.status) {
            alert("Registered!")
          } else {
            alert("Registration Failed!")
          }

        },
        error => {
          alert("Server Error! Try Again!")
        }
      )



    } else {
      alert("please fill the required fields");
    }
  }
}
