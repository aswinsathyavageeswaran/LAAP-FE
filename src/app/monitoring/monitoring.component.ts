import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  public defaultNotifications: Array<any> = [
    {
      type: "BRUSHING",
      desc: "Using a soft garment brush, brush garments lengthwise after wearing to remove surface soil that might become stains later on.",
      date: new Date("Apr, 07 2022 09:00 AM"),
      isNew: false,
      style: 1
    },
    {
      type: "CARE",
      desc: "Lighter wool fabrics may take a little longer to shed their creases. Remove wrinkles by ironing with a damp cloth or steam iron on a warm iron/dot 2 setting",
      date: new Date("Apr, 07 2022 09:00 AM"),
      isNew: false,
      style: 2
    }
  ]

  public newNotifications: Array<any> = [
    {
      type: "AIRING",
      desc: "To remove cigarette or food odours, lay wool garments flat on a bed or towel for an hour. Woven garments may be hung in fresh air on a suitable hanger.",
      date: new Date(),
      isNew: true,
      style: 3
    },
    {
      type: "IRONING",
      desc: "Many wool garments do not require ironing, but very smooth fabrics may look better if pressed. Always use steam when pressing wool. Set your iron on the wool setting and avoid ironing the fabric when it is totally dry.",
      date: new Date(),
      isNew: true,
      style: 4
    },
    {
      type: "Long-term storage",
      desc: "Since food stains and body oils attract moths, you should ensure your wool garment is clean before packing it away in airtight bags or containers. Ideally use a Woolmark-endorsed moth repellent but do not place directly on the garment.",
      date: new Date(),
      isNew: true,
      style: 5
    }
  ]

  public showHelpPopup: boolean = false;
  public showAdvice: boolean = false;

  public weatherData: any = {};

  constructor(
    private router: Router,
    public appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.isLoading = true;
    var root = this;
    setTimeout(() => {
      root.appService.isLoading = false;
    }, 2000);
    let index = 0;
    
    const timer = setInterval(() => {
      this.defaultNotifications.unshift(this.newNotifications[index]);
      index = index + 1;
      if (index == 3) {
        clearInterval(timer);
      }
    }, 4000);
    this.callWeatherAPI();
  }

  public callWeatherAPI(): void {
    this.appService.getWeatherData().subscribe(res => {
      console.log(res);
      this.weatherData = {
        effectiveDate: res.Headline.EffectiveDate,
        description: res.Headline.Text,
        forecast: res.DailyForecasts
      }
    });
  }

  public redirectToMarketing(): void {
    this.router.navigateByUrl("/marketing");
  }
}