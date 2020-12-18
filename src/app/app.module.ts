import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';
import { SuggestedVendorsComponent } from './suggested-vendors/suggested-vendors.component';
import { LoanApproveComponent } from './loan-approve/loan-approve.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { MarketTrendComponent } from './market-trend/market-trend.component';
import { HttpClientModule } from "@angular/common/http";
import { BankComponentComponent } from './bank-component/bank-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    NavComponent,
    SurveyComponent,
    SuggestedVendorsComponent,
    LoanApproveComponent,
    MonitoringComponent,
    MarketTrendComponent,
    BankComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
