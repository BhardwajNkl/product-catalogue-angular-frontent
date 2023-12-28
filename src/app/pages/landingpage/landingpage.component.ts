import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetsearchresultService } from 'src/app/services/getsearchresult.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(private resultLoader:GetsearchresultService, private router: Router, private sharedService: SharedService){

  }
  searchProduct(formData:any){
    //call api to get list of matching products
    if(formData.productCode=="") formData.productCode=null;
    if(formData.productName=="") formData.productName=null;
    if(formData.productBrand=="") formData.productBrand=null;

    this.resultLoader.getSearchResults(formData).subscribe(
      (data:any)=>{
        //console.log(data);
        //create image for each product in the list
        for(let product of data){
         this.createImageFromByteArray(product);
        }
        this.sharedService.setData(data);
        //redirect to result page
        this.router.navigate(['result'])
      },
      error=>{
        console.log(error);
        alert("Server Error!");
      }
    )
  }

createImageFromByteArray(product:any) {
    const byteCharacters = atob(product.image);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const imageBlob = new Blob([byteArray], { type: 'image/jpeg' });
    product.imageUrl = URL.createObjectURL(imageBlob);
  }
}
