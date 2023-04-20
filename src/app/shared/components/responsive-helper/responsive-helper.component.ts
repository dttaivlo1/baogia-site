import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-responsive-helper',
  templateUrl: './responsive-helper.component.html',
  styleUrls: ['./responsive-helper.component.scss'],
})
export class ResponsiveHelperComponent implements OnInit {
  public env: any = environment;

  constructor() {}

  ngOnInit(): void {}
}
