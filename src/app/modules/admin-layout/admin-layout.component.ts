import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  userData: User;
  constructor(private titleService:Title, private authService: AuthService) {
    this.titleService.setTitle("Công ty cổ phần thẩm định giá HTH");
  }

  logout(){
this.authService.SignOut();
  }
}
