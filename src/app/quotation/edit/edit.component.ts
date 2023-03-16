import { Property, properties } from './../../models/property';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quotation } from 'src/app/models/quotation';
import { QuotationService } from 'src/app/services/quotation.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {


props :  Property[] = [];

quotationList : Quotation[] = [];
quotation : Quotation ={
  id: "1",
  name: "Darin Hettinger",
  phone: "214.428.3497 x367",
  requestBy: "Deion",
  responseBy: "Jessika",
  propertyValues: 32109,
  status: "829647990"

}
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
  this.quotationList = this.quotationService.getListQuat();

this.getProperty(postId);
  //  .then(quotationList => this.quotationList = quotationList);
    if(this.quotationList.length > 0){
      this.quotation = this.quotationList[postId -1]
     }
     else {
      console.log("dit me no");
    }
}
getQuotation(){
this.quotation = this.quotation
//console.log(this.quotation);

}
getProperty(num: number){
 properties.forEach(elem =>{
  if(elem.quotation_id == num.toString()){
    this.props.push(elem);
  }

 });
 this.props = this.props;
 console.log(this.props);
 return this.props;
}



}
