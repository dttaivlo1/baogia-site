import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/core/models/property';
import { Quotation } from 'src/app/core/models/quotation';
import { QuotationService } from 'src/app/core/services/quotation.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
hasProperty= false;
props :  Property[] = [];
quotation: Quotation;
quotationList : Quotation[] = [];
a = new Date();

first = 0;
rows = 10;
showSpinner = true;
constructor(
  private quotationService: QuotationService,

    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {


 }
ngOnInit() {
  //console.log(this.showSpinner);
 const postId = this.activatedRoute.snapshot.params['id'];
this.quotationService.selectQuotatation(postId).subscribe(quotation => {
  this.quotation = quotation;
  console.log("da lay thành công báo giá số:"+ postId);
  this.showSpinner = false;

})
 // console.log(postId);
  // this.quotationService.requesting().subscribe(res =>{
  //   this.quotationList = res;
  //   this.showSpinner = false;
  //  // console.log(this.quotationList);
  //   if(this.quotationList.length > 0){
  //     this.quotation = this.quotationList[postId -1]
  //    }
  //    else {
  //   //  console.log("dit me no");
  //   }
  // })

  //  .then(quotationList => this.quotationList = quotationList);
    if(this.quotationList.length > 0){
     }
     else {

    }
}
getQuotation(){


}

}
