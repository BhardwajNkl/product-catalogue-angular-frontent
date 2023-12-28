import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CheckservicabilityService {
  url:string="http://localhost:9192/api/product/servicability"
  constructor(private http: HttpClient) { }
  checkServicability(id:number,pincode:string){
    return this.http.get(this.url+"/"+id+"/"+pincode);
  }
}
