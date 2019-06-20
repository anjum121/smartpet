import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'acl-want-to-send',
  templateUrl: './want-to-send.component.html',
  styleUrls: ['./want-to-send.component.scss']
})
export class WantToSendComponent implements OnInit, AfterViewInit {
  @ViewChild('theModal') mcfModal;

  formData = {};
  val = {};

  value;
  cars = [
    { id: 1, name: 'Others', disabled: true },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' }
  ];

  messages = { error: 'Invalid Weight' };

  myValidation;

  valueConfig = {
    items: ['Kg', 'Lb', 'G'],
    placeholder: 'Enter Weight',
    label: 'Select Weight',
    name: 'weight',
    required: 'true',

    id: 'weight',
    value: '',
    inputtype: 'text',
    transform: 'uppercase',
    mcfClass: 'dontShowInline',
    selectedItem: '0',
    disabled: false,
    labelIcon: 'acf_icon_weight'
  };
  crateTypeInputData = [
    {
      series: '100 Series',
      name: 'Small',
      img: './assets/images/crate.png',
      weight: '7 lbs',
      size: '30 (L) x 70 (W) x 30 (H) cm'
    },
    {
      series: '200 Series',
      name: 'Medium',
      img: './assets/images/crate.png',
      weight: '7 lbs',
      size: '30 (L) x 70 (W) x 30 (H) cm'
    },
    {
      series: '300 Series',
      name: 'Intermediate',
      img: './assets/images/crate.png',
      weight: '7 lbs',
      size: '30 (L) x 70 (W) x 30 (H) cm'
    },
    {
      series: '400 Series',
      name: 'Large',
      img: './assets/images/crate.png',
      weight: '7 lbs',
      size: '30 (L) x 70 (W) x 30 (H) cm'
    },
    {
      series: '500 Series',
      name: 'Extra Large',
      img: './assets/images/crate.png',
      weight: '7 lbs',
      size: '30 (L) x 70 (W) x 30 (H) cm'
    },
    {
      series: '600 Series',
      name: 'Giant',
      img: './assets/images/crate.png',
      weight: '7 lbs',
      size: '30 (L) x 70 (W) x 30 (H) cm'
    }
  ];

  public mySetDateId04: string;
  myOptions04 = {};
  constructor() {}

  ngOnInit() {
    this.value = this.cars[0];
    this.myDate04();
    this.createForm();
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

  onButtonClick() {
    this.mcfModal.isVisible = true;
  }

  createForm() {
    this.formData['selectedWeight'] = {};
  }

  submitForm() {
    console.log(this.formData);
  }

  crateTypeOutputData(e) {
    this.formData['crateSeries'] = e.series;
    this.formData['crateSize'] = `${e.weight} ${e.size} (${e.name}) `;
    console.log(e);
  }
}
