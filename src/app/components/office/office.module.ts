import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'

import { SharedModule } from "../shared/shared.module";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { OfficeLayoutComponent } from "./shared/components/office-layout/office-layout.component";
import { AuthService } from "./shared/services/auth.service";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
  declarations: [
    OfficeLayoutComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: OfficeLayoutComponent, children: [
          {path: '', redirectTo: '/office/login', pathMatch: "full"},
          {path: 'login', component: LoginComponent},
          {path: 'dashboard', component: DashboardComponent},
          {path: 'analytics', component: AnalyticsComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatRippleModule,],
  providers: [AuthService],
  
})

export class OfficeModule {

}