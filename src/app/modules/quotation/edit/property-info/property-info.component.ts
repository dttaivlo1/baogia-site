import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/core/models/property';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {

@Input() propertyData: any
  ngOnInit(): void {
   console.log(this.propertyData)


  }
  getPropsType(item){
    console.log(item)
    if(item.indexName=='CTXD'){
      return item.clcl + ' %'
    }
    else return '';
  }
  caculateSum(){
  var sum = 0;
  this.propertyData.indexData.forEach(index => {
    sum += index.totalPrice;
  });
return sum;
  } 
}