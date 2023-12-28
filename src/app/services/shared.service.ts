import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  searchResult:any=null;
  productDetail:any;
  constructor() { }
  getData():any{
    return this.searchResult;
  }
  setData(data:any){
    this.searchResult=data;
  }

  getProductDetail(){
    return this.productDetail;
  }
  setProductDetail(data:any){
    this.productDetail=data;
  }
}
