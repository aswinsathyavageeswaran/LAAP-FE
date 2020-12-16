import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-approve',
  templateUrl: './loan-approve.component.html',
  styleUrls: ['./loan-approve.component.scss']
})
export class LoanApproveComponent implements OnInit {

  public isLoading: boolean = true;

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    var root = this;
    setTimeout(() => {
      root.isLoading = false;
    }, 2000); 
    
    setTimeout(() => {
      root.router.navigateByUrl("/monitoring");
    }, 4000);
  }

}
