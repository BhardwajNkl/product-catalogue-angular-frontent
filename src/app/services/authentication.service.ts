import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginUrl="http://localhost:9192/api/auth/login";
  registerUrl="http://localhost:9192/api/auth/register";
  constructor(private http:HttpClient, private router: Router) { }
  register(userData:any){
    //call register api
    return this.http.post(this.registerUrl, userData);
  }
  login(credential: any){
    //call login api
    return this.http.post(this.loginUrl,credential);
  }

  //after successful login, we have to set the token
  setLoginInfo(token:string, userEmail:string){
    localStorage.setItem("token",token);
    localStorage.setItem("userEmail",userEmail);
  }

  getToken(){
    return localStorage.getItem("token");
  }
  getUserEmail(){
    return localStorage.getItem("userEmail");
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token==="" || token==null){
      return false;
    }
    return true;
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    //redirect to landing page
    this.router.navigate(['']);
  }
}
