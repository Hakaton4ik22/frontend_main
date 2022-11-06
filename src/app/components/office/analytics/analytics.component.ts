import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

import { Table } from '../../shared/interfaces';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
import { TableService } from '../shared/services/table.service';

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  displayedColumns: string[] = ['napr', 'nastranapr', 'tnved_description', 'stoim', 'netto', 'kol', 'region_description', 'region_s_description', 'month', 'year'];
  dataSource = new MatTableDataSource<Table>();
   @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
 title = 'tableAnatytics';
  constructor(private tableservice: TableService,
        private _api : ApiService,
    private _auth: AuthService,
    private router: Router) { }
    listAnalytics!: Table[];
  analyticForm: FormGroup;
  submitted: boolean = false;

  ngOnInit() {
    this.fetchTable();
     this.analyticForm = new FormGroup({
      okved: new FormControl(null, [Validators.required]),
      tnved: new FormControl(null, [Validators.required]),
      period: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
    })
  }
  //   ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  fetchTable() {
    this.tableservice.getTable().subscribe(data=> {
      this.listAnalytics = data


      this.dataSource = new MatTableDataSource(this.listAnalytics)
      setTimeout(()=>{
        this.dataSource.paginator = this.paginator;
   })
   this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   submit() {
    
    if (this.analyticForm.invalid){
      return
    }

    this.submitted = true
    

  }

}