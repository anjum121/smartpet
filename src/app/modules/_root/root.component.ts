import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  /* tslint:disable */
  selector: 'accelya-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  title = 'Accelya ';

  constructor(private router: Router) {}
  ngOnInit() {
    console.log('Root Component');
  }

  privacyPolicy = {
    label: 'Privacy ',
    href: '#/input/defaults',
    newWindow: true
  };

  termsAndConditions = {
    label: 'Terms & conditions',
    href: '#/alert/defaults'
  };

  goToPage(item) {
    console.log(item);
    event.preventDefault();
    this.router.navigate(['/' + item]);
  }
}
