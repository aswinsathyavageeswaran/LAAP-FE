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
  public displayPopup: boolean = false;
  public selectedCard: number = -1;

  constructor(
    private router: Router
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


}
