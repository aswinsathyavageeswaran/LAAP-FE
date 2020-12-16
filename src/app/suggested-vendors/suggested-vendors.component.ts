import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggested-vendors',
  templateUrl: './suggested-vendors.component.html',
  styleUrls: ['./suggested-vendors.component.scss']
})
export class SuggestedVendorsComponent implements OnInit {

  public isSelectedInsuranceCard: number = -1;
  public isSelectedSoilCard: number = -1;
  public title = "Suggested Vendors & Loans";
  public selectedTable: number = -1;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public selectButton(e): void {
    e.stopPropagation();
  }

  public redirectToApprove(): void {
    this.router.navigateByUrl("/approved");
  }

}
