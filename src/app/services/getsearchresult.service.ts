import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class GetsearchresultService {
  urlForLoggedUser:string="http://localhost:9192/api/product/loggeduser/search";
  urlForAnonymous:string="http://localhost:9192/api/product/anonymous/search";
  constructor(private http: HttpClient, private authenticator:AuthenticationService) { }
  getSearchResults(searchData:any){
    if(this.authenticator.isLoggedIn()){
      return this.http.post(this.urlForLoggedUser,searchData);
    } else{
      return this.http.post(this.urlForAnonymous,searchData);
    }
    
  }
}
