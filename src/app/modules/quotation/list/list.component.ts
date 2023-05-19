
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/core/models/property';
import { Quotation } from 'src/app/core/models/quotation';
import { PdfService } from 'src/app/core/services/pdf.service';
import { QuotationService } from 'src/app/core/services/quotation.service';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { CLIENT_RENEG_LIMIT } from 'tls';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  sm = 'p-datatable-sm p-datatable-gridlines';
  props: Property[] = [];
  create = false;
  quotationList: Quotation[] = [];
  staffList: [];
  first = 0;

  rows = 10;
  showSpinner = true;
  constructor(private quotationService: QuotationService, private pdfService: PdfService) {
  
    this.quotationService.getAll().subscribe({
      next: (quotation: any) => {
        this.quotationList = quotation.data;
        this.showSpinner = false;
        console.log(this.quotationList);
        setTimeout(() => {}, 3000);
        console.log(this.showSpinner);
      },
      error(e) {
       Swal.fire('error', e.message, 'question');
      },
      complete() {
        console.log('done!');
      },
    });
  }
  ngOnInit() {
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
    return this.quotationList
      ? this.first === this.quotationList.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.quotationList ? this.first === 0 : true;
  }
  changeStatus() {
    if (this.create) {
      this.create = false;
    } else {
      this.create = true;
    }
  }
  showAlert(todo, quotation: Quotation) {
    switch (todo) {
      case 1: {
        Swal.fire({
          title: 'Bạn đang thực hiện xuất tập tin PDF thông báo giá',
          text: 'Thao tác này không thể khôi phục...',
          icon: 'info',
          iconColor: '#369faf',
          showCancelButton: true,
          confirmButtonColor: '#369faf',
          cancelButtonColor: 'danger',
          confirmButtonText: 'Đồng ý!',
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(quotation);
            pdfMake.createPdf(this.pdfService.generatePDF(quotation)).open();
            
            }
        });
       break;
      }
      case 2: {
        Swal.fire(
          'Thành công!',
          'Thao tác này đang được phát triển',
          'warning'
        );
        break;
      }
      case 3: {
        Swal.fire({
          title: 'Bạn có chắc rằng muốn xoá ?',
          text: 'Thao tác này không thể khôi phục...',
          icon: 'warning',
          iconColor: '#369faf',
          showCancelButton: true,
          confirmButtonColor: '#369faf',
          cancelButtonColor: 'danger',
          confirmButtonText: 'Vẫn xoá!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Thành công!',
              'Thao tác của bạn đã được thực hiện.',
              'success'
            );
          }
        });
        break;
      }
      case 4: {
        Swal.fire({
          title: 'Bạn có chắc rằng muốn xoá ?',
          text: 'Thao tác này không thể khôi phục...',
          icon: 'warning',
          iconColor: '#369faf',
          showCancelButton: true,
          confirmButtonColor: '#369faf',
          cancelButtonColor: 'danger',
          confirmButtonText: 'Vẫn xoá!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Thành công!',
              'Thao tác của bạn đã được thực hiện.',
              'success'
            );
          }
        });
        break;
      }

      default: {
        //statements;
        break;
     }
    }
  }
}
