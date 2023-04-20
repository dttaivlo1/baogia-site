import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  constructor(private userService: UserService) {

    this.userService.getAll().subscribe({
      next: (user: any) => {
        this.listUser = user.data;
        this.showSpinner = false;
        console.log(this.listUser);
        setTimeout(() => {}, 3000);
      },
      error(e) {
        console.log(e);
      },
      complete() {
        console.log('done!');
      },
    });
  }
  sm = 'p-datatable-sm p-datatable-gridlines';
  create = false;
listUser : User[] = [];
  first = 0;

  rows = 10;
  showSpinner = true;
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
    return this.listUser
      ? this.first === this.listUser.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.listUser ? this.first === 0 : true;
  }
  changeStatus() {
    if (this.create) {
      this.create = false;
    } else {
      this.create = true;
    }
  }
  showAlert(todo) {
    switch (todo) {
      case 1: {
        Swal.fire({
          title: 'Bạn đang thực hiện xuất tập tin PDF thông báo giá',
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
      case 2: {
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
