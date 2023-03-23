import { QuotationService } from './../../services/quotation.service';
import { Quotation } from 'src/app/models/quotation';
import { Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Property } from './../../models/property';
import { Index } from 'src/app/models';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  props: Property[] = []
create = false
quotationList : Quotation[] = [];

    first = 0;

    rows = 10;
    showSpinner = true;
    constructor(private quotationService: QuotationService) {
      // this.quotationService.requesting().subscribe(res =>{
      //   this.quotationList = res;
      //   this.showSpinner = false;
      //   setTimeout(() => {

      //   }, 3000);
      // //  console.log(this.showSpinner);
      // })
      this.quotationService.getAll().subscribe({
        next: quotation => {
          this.quotationList = quotation
          this.showSpinner = false;
          console.log(this.quotationList);
          setTimeout(() => {
               }, 3000);
            console.log(this.showSpinner);
       },
       error (e){
        console.log(e);
       },
       complete () {console.log("done!")}
      });
    }
    ngOnInit() {

     // console.log(this.props);
      //  .then(quotationList => this.quotationList = quotationList);
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.quotationList ? this.first === (this.quotationList.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.quotationList ? this.first === 0 : true;
    }


    changeStatus(){
      if(this.create){
        this.create = false;
      }
      else{
        this.create = true;
      }
    }

}
