import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
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

  fetchTable() {
    this.tableservice.getTable().subscribe(data=> {
      this.listAnalytics = data


      this.dataSource = new MatTableDataSource(this.listAnalytics)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   submit() {
    
    if (this.analyticForm.invalid){
      return
    }

    this.submitted = true
    

  }

}