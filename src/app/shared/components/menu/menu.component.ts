import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'accelya-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  constructor() {}
  public appBrand = {
    name: 'Smart Pet booking',
    logo: 'acf_icon_accelya_header_icon'
  };

  ngOnInit() {
    console.log('Menu component');
  }
}
