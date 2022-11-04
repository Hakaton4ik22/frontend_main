import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Table } from '../../shared/interfaces';
import { TableService } from '../shared/services/table.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  title = 'tableAnatytics';

  dataSource: any
  listAnalytics!: Table[];

  constructor(private tableservice: TableService) { }

  ngOnInit() {
    this.fetchTable();
  }

  fetchTable() {
    this.tableservice.getTable().subscribe(data=> {
      this.listAnalytics = data
      this.dataSource = new MatTableDataSource(this.listAnalytics)
    })
  }

  displayedColumns: string[] = ['napr', 'nastranaprt', 'tnved_description', 'stoim', 'netto', 'kol', 'region_description', 'month', 'year']

}