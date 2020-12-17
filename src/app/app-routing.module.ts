import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { SuggestedVendorsComponent } from './suggested-vendors/suggested-vendors.component';
import { LoanApproveComponent } from './loan-approve/loan-approve.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { MarketTrendComponent } from './market-trend/market-trend.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'suggested-vendors', component: SuggestedVendorsComponent },
  { path: 'approved', component: LoanApproveComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'marketing', component: MarketTrendComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
