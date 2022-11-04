import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Table } from '../../shared/interfaces';
import { TableService } from '../shared/services/table.service';


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
      console.log(this.listAnalytics)
      this.dataSource = new MatTableDataSource(this.listAnalytics)
    })
  }

  displayedColumns: string[] = ['napr', 'nastranaprt', 'tnved_description', 'stoim', 'netto', 'kol', 'region_description', 'month', 'year']

}