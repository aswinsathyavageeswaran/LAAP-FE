import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-market-trend',
  templateUrl: './market-trend.component.html',
  styleUrls: ['./market-trend.component.scss']
})
export class MarketTrendComponent implements OnInit {

  public openVendorPopup: boolean = false;
  public totalCost: number = 0;
  public quantity: number = 0;
  public selectedIndex: number = 0;

  constructor(
    public appService: AppService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.appService.isLoading = true;
    var root = this;

    setTimeout(() => {
      root.appService.isLoading = false;
    }, 2000);
  }

  public confirmDeal(): void {
    this.openVendorPopup = false;
    this.appService.cycleNumber = this.appService.cycleNumber + 1;
    this.router.navigateByUrl("/marketing");
  }

  public qtyInputChanged(pricePerKg: number): void {
    this.totalCost = this.quantity * pricePerKg;
  }

}