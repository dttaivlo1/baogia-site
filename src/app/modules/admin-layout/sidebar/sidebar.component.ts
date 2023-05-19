import { Component } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navItem: MenuItem[] = [
    {name: 'Tổng quan', data: 'home', icon: 'fas fa-dashboard', path: 'dashboard', status: 'active'},
    {name: 'Báo Giá', data: 'baogia', icon: 'fas fa-layer-group', path: 'baogia', status: 'unactive'},
    {name: 'Tiện ích', data: 'home', icon: 'fa-brands fa-dashcube', path: 'tien-ich', status: 'unactive'},
    {name: 'Nhân viên', data: 'nhan-vien', icon: 'fa-solid fa-user', path: 'quan-li-nhan-vien', status: 'unactive'},
    {name: 'Home', data: 'home', icon: 'fas fa-home', path: 'home', status: 'unactive'},
  ];
router: any;

change(event: MenuItem){
 this.navItem.forEach(element => {
    element.status = 'unactive';
  });
  event.status = 'active';
}
}
