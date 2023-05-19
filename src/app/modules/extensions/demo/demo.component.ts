import { Component, OnInit } from '@angular/core';
import { QuotationService } from 'src/app/core/services/quotation.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  PropertyList  :any;
  constructor(private quotationService: QuotationService){}
  ngOnInit(): void {
this.quotationService.getInfo().subscribe(info => {
this.PropertyList = info
});
  }

}
