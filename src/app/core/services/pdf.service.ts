import { Injectable } from '@angular/core';
import { AppDefinition } from '../configs/constants/app-define.constant';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  quotion: any;
  sum = 0;
  today = new Date();
  now = this.today.toLocaleDateString() + ' - ' + this.today.toLocaleTimeString();
  pdf: any = {
    info: {
      title: 'baogiasobo',
    },
    permissions: {
      printing: 'highResolution', //'lowResolution'
      modifying: false,
      copying: false,
      annotating: false,
      fillingForms: false,
      contentAccessibility: false,
      documentAssembly: false
    },
    content: [],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black',
      },
    },
    defaultStyle: [],

  };
  constructor() {

  }
  generatePDF(item: Object) {
    this.quotion = item;
    this.loadCommonData(this.quotion.id);
    this.loadPropertyData(this.quotion.propertyData);
    this.pdf.content.push({
      fontSize: 10,
      text: 'Giá trị chính xác sẽ được HTH xác định sau khi khảo sát thực tế hiện trường',
      alignment: 'center',
      italics: true,
      margin: 0
    },
    )
    return this.pdf;
  }
  loadCommonData(item) {
    this.pdf.content = [
      {
        border: true,
        layout: 'lightHorizontalLines', // optional
        columns: [
          /* #region */
          {
            // auto-sized columns have their widths based on their content

            // if you specify width, image will scale proportionally
            image:AppDefinition.APP_LOGO
             ,
            width: 130,
            alignment: 'left',
            color: 'red'
          },
          /* #endregion */

          [{
            fontSize: 14,
            alignment: 'right',
            margin: [0, 7],
            // star-sized columns fill the remaining space
            // if there's more than one star-column, available width is divided equally
            width: '70%',
            text: 'CÔNG TY CỔ PHẦN THẨM ĐỊNH GIÁ HTH',
          },
          {
            fontSize: 9,
            alignment: 'right',

            // star-sized columns fill the remaining space
            // if there's more than one star-column, available width is divided equally
            width: '80%',
            text: this.now,
          },
          ]
        ],
      },
      { text: 'Mã TSSB: HTH'+ item, alignment: 'left', fontSize: 10, margin: 5 },

      {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        fontWeight: 10,
        // star-sized columns fill the remaining space
        // if there's more than one star-column, available width is divided equally
        text: 'KẾT QUẢ THẨM ĐỊNH GIÁ SƠ BỘ',
      },
      {
        fontSize: 15,
        bold: true,
        alignment: 'center',
        // star-sized columns fill the remaining space
        // if there's more than one star-column, available width is divided equally
        text: 'INTERIM APPRAISAL RESULT',
        color: '#369FAF',
      },
      // margin: [horizontal, vertical
      {
        name: 'property',
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [85, '*'],
          headerRows: 1,
          margin: [5, 10],
          // keepWithHeaderRows: 1,
          body: [
            [
              {
                text: 'I. Thông tin chung về khách hàng thẩm định giá',
                style: 'tableHeader',
                fillColor: '#34C7B2',
                color: 'white',

                alignment: 'left',
                colSpan: 2,
              },
              {},
            ],
            [
              'Kính gửi', this.quotion.name,
            ],
            ['Về chúng tôi:', 'Công ty cổ phần thẩm định giá HTH'],
            ['Cán bộ tiếp nhận', this.quotion.requestBy],
            ['cán bộ thực hiện ', this.quotion.responseBy],
          ],
        },
      },
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [85, '*', 'auto', 'auto', '*'],

          margin: [5, 10],
          // keepWithHeaderRows: 1,
          body: [
            [
              {
                text: 'II. Kết quả thẩm định giá sơ bộ',
                style: 'tableHeader',
                fillColor: '#369FAF',
                color: 'white',
                alignment: 'left',
                colSpan: 5,
              },
              {},
              {},
              {},
              {},
            ],
          ]
        },
      }
    ]
  }
  loadPropertyData(list: any) {
    list.forEach(item => {
      this.pdf.content[5].table.body.push(
        [
          { text: list.indexOf(item) + 1 + '. ' + item.propertyName, alignment: 'left', colSpan: 5, bold: true },
          {},
          {},
          {},
          {},
        ],
        [
          'Địa chỉ trên tài sản',
          {
            text: item.propertyAddress,
            alignment: 'left',
            colSpan: 4,
          },
          '',
          '',
          '',
        ],
        [
          'Địa chỉ thực tế',
          {
            text: item.propertyAddress,
            alignment: 'left',
            colSpan: 4,
          },
          '',
          '',
          '',
        ],
        [
          'Mô tả tài sản',
          { text: item.propertyDef, alignment: 'left', colSpan: 4 },
          '',
          '',
          '',
        ],
        [
          'Thông tin quy hoạch',
          { text: item.propertyPlanning, alignment: 'left', colSpan: 4 },
          '',
          '',
          '',
        ],
        [
          { bold: true, text: 'Hạng mục', alignment: 'center' },
          { bold: true, text: 'Đơn giá', alignment: 'center' },
          { bold: true, text: 'diện tích', alignment: 'center' },
          { bold: true, text: 'clcl', alignment: 'center' },
          { bold: true, text: 'Giá trị ước tính', alignment: 'center', width: '*' },
        ],
      )
      this.pdf.content[5].table.body.push(...this.loadIndexData(item.indexData))

    },
    )
    this.pdf.content[5].table.body.push([
      { bold: true, fontSize: 13, text: 'Tổng giá trị dựa trên ' + this.quotion.propertyData.length + ' tài sản:', alignment: 'center', colSpan: 3 },
      {}, {}, { bold: true, fontSize: 13, text: this.sum.toLocaleString("en-US") + 'VNĐ', alignment: 'center', colSpan: 2 }, {}
    ])
    this.sum = 0;
  }
  isCtxd(name) {
    if (name.indexName == 'CTXD') {
return  name.clcl
    }
    else return  '';
  }
  loadIndexData(itemList: any) {
    let tempList: any[] = [];
    let total =0
    itemList.forEach(element => {
      
      tempList.push([{ fontSize: 11, text: element.indexName, alignment: 'left' },
      { fontSize: 11, text: element.unitPrice.toLocaleString("en-US") + ' VNĐ', alignment: 'right' },
      { fontSize: 11, text: element.area.toLocaleString("en-US"), alignment: 'right' },
      { fontSize: 11, text: this.isCtxd(element), alignment: 'right' },
      { fontSize: 11, text: element.totalPrice.toLocaleString("en-US") + ' VNĐ', alignment: 'right', width: '*' },
      ]);
      total = total + element.totalPrice;
    }
    );
    tempList.push(
      [
        { fontSize: 11, text: 'Tổng giá trị:', alignment: 'center', colSpan: 4 }
        , {}, {}, {}, { fontSize: 13, bold: true, text:  total.toLocaleString("en-US") + ' VNĐ', alignment: 'center', }
      ]
    )
    this.sum = this.sum + total;
    return tempList;
  }
}
