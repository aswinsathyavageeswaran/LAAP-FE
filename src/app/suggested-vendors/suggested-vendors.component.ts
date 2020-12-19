import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-suggested-vendors',
  templateUrl: './suggested-vendors.component.html',
  styleUrls: ['./suggested-vendors.component.scss']
})
export class SuggestedVendorsComponent implements OnInit {

  public isSelectedInsuranceCard: number = -1;
  public isSelectedSoilCard: number = -1;
  public isSelectedNGOCard: number = -1;
  public title = "Suggested Vendors & Loans";
  public selectedTable: number = -1;
  public displayPopup: boolean = false;
  public selectedCard: number = -1;
  public openLoanPopup: boolean = false;
  public accountDetails: any;
  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  public selectButton(e): void {
    e.stopPropagation();
    this.displayPopup = true;
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    setTimeout(() => {
      document.getElementsByClassName("popup-div")[0].classList.add("open");
    }, 200);
  }

  public redirectToApprove(): void {
    this.router.navigateByUrl("/approved");
  }

  public closePopup(): void {
    document.getElementsByClassName("popup-div")[0].classList.remove("open");
    var root = this;
    setTimeout(() => {
      root.displayPopup = false;
      document.getElementsByTagName("body")[0].style.overflowY = "auto";
    }, 200);
    this.selectedCard = -1;
  }

  public savePopup(): void {
    document.getElementsByClassName("popup-div")[0].classList.remove("open");
    var root = this;
    setTimeout(() => {
      root.displayPopup = false;
      document.getElementsByTagName("body")[0].style.overflowY = "auto";
    }, 200);
  }

  public saveLoanPopup(): void {
    this.openLoanPopup = false;
  }

  public getAccountDetails(): void {
    // this.appService.isLoading = true;
    // this.appService.getAccountDetails().subscribe(res => {
    //   this.accountDetails = res;
    //   this.openLoanPopup = true;
    //   this.appService.isLoading = false;
    // })
  }
}
