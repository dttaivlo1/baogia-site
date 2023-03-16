import { MenuItem } from './../../../models/menu-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navItem: MenuItem[] = [
    {name: 'Tổng quan', data: 'home', icon: 'fas fa-dashboard', path: 'dashboard', status: 'active'},
    {name: 'Báo Giá', data: 'baogia', icon: 'fas fa-layer-group', path: 'baogia', status: 'unactive'},
    {name: 'Tiện ích', data: 'home', icon: 'fa-brands fa-dashcube', path: 'home', status: 'unactive'},
    {name: 'Home', data: 'home', icon: 'fa-solid fa-square-root-variable', path: 'home', status: 'unactive'},
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
