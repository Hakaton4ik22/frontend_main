import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  analyticForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.analyticForm = new FormGroup({
      okved: new FormControl(null, [Validators.required]),
      tnved: new FormControl(null, [Validators.required]),
      period: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
    })
  }
   submit() {
    
    if (this.analyticForm.invalid){
      return
    }

    this.submitted = true
    

    // Сделано пока нет подключения к БД (POST сервер)
    this.router.navigate(['/office', 'analytics'])

  }
}
