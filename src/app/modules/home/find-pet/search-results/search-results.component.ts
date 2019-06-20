import { Component, OnInit } from '@angular/core';

import { data } from './dummy.data';
import { IDatatableColumn } from 'mcf-datatable';

@Component({
  selector: 'acl-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public data = data;
  public columnsTable: IDatatableColumn[] = [
    {
      field: 'type',
      options: {
        title: 'Type',
        search: true
      }
    },
    {
      field: 'name',
      options: {
        title: 'Name',
        search: true
      }
    },
    {
      field: 'breed',
      options: {
        title: 'Breed/ Species',
        search: true
      }
    },
    {
      field: 'age',
      options: {
        title: 'Age',
        search: true
      }
    },
    {
      field: 'weight',
      options: {
        title: 'Weight',
        search: false
      }
    },
    {
      field: 'crate',
      options: {
        title: 'Crate',
        search: false
      }
    }
  ];
  constructor() {}

  ngOnInit() {}

  public selected(event): void {
    console.log(event);
    alert(`${event.selected ? 'Selected' : 'Deselected'} ${event.row.name}`);
  }
}
