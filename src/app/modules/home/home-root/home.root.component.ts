import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'accelya-home',
  templateUrl: './home.root.component.html',
  styleUrls: ['./home.root.component.scss']
})
export class HomeRootComponent implements AfterViewInit, OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home/', { outlets: { new: ['new'] } }]);
  }

  ngAfterViewInit() {}

  onTabChange(e) {
    if (e.index === 0) {
      this.router.navigate(['/home/', { outlets: { new: ['new'] } }]);
    } else {
      this.router.navigate(['/home/', { outlets: { old: ['old'] } }]);
    }
  }
}
