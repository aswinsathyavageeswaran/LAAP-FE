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
  public displayFourthQuestion: boolean = false;
  public selectedSoftware: boolean = false;
  public businessType: string = "";
  public cropType: string = "";
  public location: string = "";
  public hasError: boolean = false;
  public enableSubmit: boolean = false;
  public user: any;
  public inputCity: string = "";
  public title="Survey";

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.user = this.appService.user;
  }

  public onSelectType(): void {
    this.reset();
    this.displaySecondQuestion = this.businessType == "agriculture" ? true : false;
    this.selectedSoftware = this.businessType == "software" ? true : false;
  }

  public onSelectCrop(): void {
    this.location = "";
    this.displayThirdQuestion = this.cropType.length ? true : false;
    this.displayFourthQuestion = false;
  }

  public onSelectLocation(): void {
    if(this.location != "california" && this.cropType == "grapes") {
      this.hasError = true;
      this.enableSubmit = false;
      this.displayFourthQuestion = false;
      return;
    }

    if(this.location == "california") {
      this.hasError = false;
      this.displayFourthQuestion = true;
    }
  }

  public onSelectCity(): void {
    this.enableSubmit = this.inputCity.length ? true : false;
  }

  public redirectToVendors(): void {
    this.router.navigateByUrl("/suggested-vendors");
  }

  private reset(): void {
    this.cropType = "";
    this.location = "";
    this.hasError = false;
    this.enableSubmit = false;
    this.inputCity = "";
    this.displayFourthQuestion = false;
    this.displaySecondQuestion = false;
    this.displayThirdQuestion = false;
    this.selectedSoftware = false;
  }

}
