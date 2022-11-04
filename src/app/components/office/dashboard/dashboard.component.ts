import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(
    private _api : ApiService,
    private _auth: AuthService,
    private router: Router
  ) { }

  
  analyticForm: FormGroup;
  submitted: boolean = false;


  ngOnInit(): void {
    this.test_jwt()
     this.analyticForm = new FormGroup({
      okved: new FormControl(null, [Validators.required]),
      tnved: new FormControl(null, [Validators.required]),
      period: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
    })
  }

  test_jwt(){
    this._api.getTypeRequest('test-jwt').subscribe((res: any) => {
      console.log(res)

    }, err => {
      console.log(err)
    });
  }





   submit() {
    
    if (this.analyticForm.invalid){
      return
    }

    this.submitted = true
    

  }
}
