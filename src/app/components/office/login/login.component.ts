import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }
  submit() {
    
    if (this.form.invalid){
      return
    }

    this.submitted = true
    
    const user: User ={
      email: this.form.value.email,
      password: this.form.value.password,
    }


      this.router.navigate(['/office', 'dashboard'])
    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/office', 'dashboard'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }
}
