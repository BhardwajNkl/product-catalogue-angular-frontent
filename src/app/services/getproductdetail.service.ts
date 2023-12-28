import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetproductdetailService {
  url="http://localhost:9192/api/product/detail/";
  constructor(private http: HttpClient) { }
  loadProductDetail(id:number){
    return this.http.get(this.url+id);
  }
}
