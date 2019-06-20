import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'acl-want-to-send',
  templateUrl: './want-to-send.component.html',
  styleUrls: ['./want-to-send.component.scss']
})
export class WantToSendComponent implements OnInit, AfterViewInit {
  value;
  cars = [
    { id: 1, name: 'Others', disabled: true },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' }
  ];

  val = {};

  valueConfig = {
    items: ['Kg', 'Lb', 'G'],
    placeholder: 'Enter Weight',
    label: 'Select Weight',
    name: 'weight',
    required: 'true',
    datatype: 'multiple',
    id: 'weight',
    value: '',
    inputtype: 'text',
    transform: 'uppercase',
    mcfClass: 'dontShowInline',
    selectedItem: '0',
    disabled: false,
    labelIcon: ''
  };

  public mySetDateId04: string;
  myOptions04 = {};
  constructor() {}

  ngOnInit() {
    this.value = this.cars[0];
    this.myDate04();
  }
  ngAfterViewInit() {}

  public myDate04(): void {
    this.myOptions04 = {
      // defaultDate: '2017-11-3',
      // enableTime: true
    };

    this.mySetDateId04 = '2017-11-22';
  }

  onValueChange(e) {
    console.log(e);
  }
}
