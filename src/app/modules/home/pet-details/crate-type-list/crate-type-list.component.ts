import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acl-crate-type-list',
  templateUrl: './crate-type-list.component.html',
  styleUrls: ['./crate-type-list.component.scss']
})
export class CrateTypeListComponent implements OnInit {
  _crateTypeInputData = {};

  @Input()
  set inputData(value) {
    this._crateTypeInputData = value;
  }
  get inputData() {
    return this._crateTypeInputData;
  }

  @Output() outputData = new EventEmitter();
  SelectedItem: string;
  constructor() {}

  ngOnInit() {}

  onSelect(e) {
    this.SelectedItem = e.name;
    this.outputData.emit(e);
  }
}
