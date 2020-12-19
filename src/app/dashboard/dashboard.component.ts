import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
    // this.router.navigateByUrl("/survey");
  }

  public redirectToSurvey(): void {
    this.router.navigateByUrl("/survey");
  }

}
