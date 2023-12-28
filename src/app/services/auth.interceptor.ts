import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authenticator: AuthenticationService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       let tokenData = this.authenticator.getToken();
       let token="";
        if(tokenData!=null){
            token=tokenData.toString();
            req=req.clone({setHeaders:{Authorization: 'Bearer '+token
        }});
        }
        return next.handle(req);
    }
   
}