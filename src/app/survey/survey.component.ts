import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public displaySecondQuestion: boolean = false;
  public displayThirdQuestion: boolean = false;
  public displayForthQuestion: boolean = false;
  public displayFifthQuestion: boolean = false;
  public selectedAgri: boolean = false;
  public selectedSoftware: boolean = false;
  public businessType: string = "";
  public industryType: string = "";
  public fabric: string = "";
  public location: string = "";
  public hasError: boolean = false;
  public enableSubmit: boolean = false;
  public user: any;
  public inputCity: string = "Fresno";
  public title="Survey";
  public totalInvestment: string = "70000";
  public prodExpense: string = "50000";
  public tradingExpense: string = "20000";
  public harvestCycle: string = "2";
  public returns: string = "85000";
  public softwareType: string = "";


  constructor(
    public appService: AppService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.user = this.appService.user;
  }

  public onSelectType(): void {
    this.reset();
    this.displaySecondQuestion = this.businessType == "textile" ? true : false;
    this.selectedSoftware = this.businessType == "software" ? true : false;
    this.selectedAgri = this.businessType == "agriculture" ? true : false;
  }

  public onSelectIndustry(): void {
    this.location = "";
    this.fabric = "";
    this.displayThirdQuestion = this.industryType.length ? true : false;
    this.displayForthQuestion = false;
  }

  public onSelectFabric(): void {
    this.location = "";
    this.displayForthQuestion = this.industryType.length ? true : false;
    this.displayFifthQuestion = false;
  }

  public onSelectLocation(): void {
    this.appService.isLoading = true;
    var root = this;
    setTimeout(() => {
      root.appService.isLoading = false;
      if(root.location == "AK" && root.fabric == "cotton") {
        root.hasError = true;
        root.enableSubmit = false;
        root.displayFifthQuestion = false;
        return;
      }
  
      if(root.location == "AK" && root.fabric == "wool") {
        root.hasError = false;
        root.displayFifthQuestion = true;
      }
    }, 2000);

    
  }

  public onSelectCity(): void {
    this.enableSubmit = this.inputCity.length ? true : false;
  }

  public redirectToVendors(): void {
    var root = this;
    this.appService.isLoading = true;
    setTimeout(() => {
      root.appService.isLoading = false;
      root.router.navigateByUrl("/suggested-vendors");
    }, 2000);
  }

  private reset(): void {
    this.industryType = "";
    this.location = "";
    this.hasError = false;
    this.enableSubmit = false;
    this.inputCity = "";
    this.displayForthQuestion = false;
    this.displaySecondQuestion = false;
    this.displayThirdQuestion = false;
    this.selectedSoftware = false;
  }

}
