import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-loan-approve',
  templateUrl: './loan-approve.component.html',
  styleUrls: ['./loan-approve.component.scss']
})
export class LoanApproveComponent implements OnInit {

  public isLoading: boolean = true;

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.isLoading = true;
    var root = this;
    setTimeout(() => {
      root.appService.isLoading = false;
    }, 2000); 
    
    setTimeout(() => {
      root.router.navigateByUrl("/monitoring");
    }, 4000);
  }

}
