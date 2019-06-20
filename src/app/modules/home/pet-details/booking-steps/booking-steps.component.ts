import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'acl-booking-steps',
  templateUrl: './booking-steps.component.html',
  styleUrls: ['./booking-steps.component.scss']
})
export class BookingStepsComponent implements OnInit {
  active = 1;
  @Input()
  set activeState(value) {
    this.active = value;
  }

  get activeState() {
    return this.active;
  }

  public currentStep = {
    title: 'Pet Details',
    route: '/1'
  };

  public steps = [
    {
      title: 'Pet Details ',
      route: '/1'
    },
    {
      title: 'Flights & Rates',
      route: '/2'
    },
    {
      title: 'Pick up / Drop Off',
      route: '/3'
    },
    {
      title: 'Review',
      route: '/4'
    },
    {
      title: 'View Booking',
      route: '/5'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.currentStep = this.steps[this.active];
  }
}
