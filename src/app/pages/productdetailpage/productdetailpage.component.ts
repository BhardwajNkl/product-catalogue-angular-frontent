import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { CheckservicabilityService } from 'src/app/services/checkservicability.service';
@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent {
  product:any;
  servicabilityStatus:boolean=false;
  servicabilityMessage:string="";
  constructor(private sharedService: SharedService, private servicabilityChecker: CheckservicabilityService){}
  ngOnInit(){
    this.product=this.sharedService.getProductDetail();
  }
  checkServicability(id:number,pincode:string){
    this.servicabilityChecker.checkServicability(id,pincode).subscribe(
      (data:any)=>{        
        if(data.status==true){
          this.servicabilityStatus=true;
          this.servicabilityMessage="Avaialable in your area. It will be delivered within "+data.inDays+" days.";
        } else{
          this.servicabilityStatus=true;
          this.servicabilityMessage="Not available in your area!"
        }
      },
      error=>{
        alert("Server Error!");
      }
    )
  }
}
