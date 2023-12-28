import { Component } from '@angular/core';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { GetproductdetailService } from 'src/app/services/getproductdetail.service';
import { max } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent {
  loggedin:boolean=true;
  resultDataReceived:boolean=false;
  resultData:any[]=[];
  resultDisplayed:any[]=[];
  brandFilterList:string[]=[];
  brandList:string[]=[];
  
  constructor(private sharedService: SharedService, private router:Router, private productDetailsLoader: GetproductdetailService, private authenticator: AuthenticationService){

  }
  ngOnInit(){
   // console.log(this.sharedService.getData());
    this.resultData=this.sharedService.getData();
    this.getBrandList(this.resultData);
    this.loggedin=this.authenticator.isLoggedIn();
    this.resultDisplayed=this.resultData;
    //write logic for seting the flag for data received(Meaning that there is at least one product) or not
    if(this.resultData.length>0){
      this.resultDataReceived=true;
    }
    else{
      this.resultDataReceived=false;
    }
    
  }

  getBrandList(list:any){
    for(let product of list){
      if(this.brandList.indexOf(product.brand)>=0){
        continue;
      } else{
        this.brandList.push(product.brand);
      }
    }
  }

  getDetails(id:number){
    this.productDetailsLoader.loadProductDetail(id).subscribe(
      data =>{
        //create image url
        this.createImageFromByteArray(data);
        this.sharedService.setProductDetail(data);
        this.router.navigate(['productdetail']);
      },
      error=>{
        console.log(error);
      }
    )
  }
  createImageFromByteArray(product:any) {
    const byteCharacters = atob(product.productImage);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const imageBlob = new Blob([byteArray], { type: 'image/jpeg' });
    product.imageUrl = URL.createObjectURL(imageBlob);
  }

  onFilterChange(brand:string){
    const index=this.brandFilterList.indexOf(brand);
    if(index>=0){
      //mean present, so remove it
      this.brandFilterList.splice(index,1);
    } else{
      //not present so add
      this.brandFilterList.push(brand);
    }
  }

  filterProductsByBrand(){
    if(this.brandFilterList.length<=0){
      this.resultDisplayed=this.resultData;
    }
    else{
      this.resultDisplayed=this.resultData.filter((x)=>this.brandFilterList.indexOf(x.brand)>=0);
    }
  }
  filterProductsByBrandAndPrice(maxPrice:string){
    if(this.brandFilterList.length<=0){
      //apply price filter only
      this.resultDisplayed=this.resultData.filter((x)=> maxPrice=="" || x.price<=maxPrice);
    }
    else{
      this.resultDisplayed=this.resultData.filter((x)=>this.brandFilterList.indexOf(x.brand)>=0 && (maxPrice=="" || x.price<=maxPrice));
    }
  }
}
