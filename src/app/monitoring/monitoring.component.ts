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
      type: "PLANTING",
      desc: "Plant dormant, bare-root grape vines in the early spring.",
      date: new Date("Dec, 16 2020 09:00 AM"),
      isNew: false,
      style: 1
    },
    {
      type: "CARE",
      desc: "Do not fertilize in the first year unless you have problem soil. Fertilize lightly in the second year of growth.",
      date: new Date("Dec, 16 2020 12:00 PM"),
      isNew: false,
      style: 2
    }
  ]

  public newNotifications: Array<any> = [
    {
      type: "HARVEST/STORAGE",
      desc: "If grapes aren’t ripening, pinch back some of the foliage to let in more sunlight.",
      date: new Date(),
      isNew: true,
      style: 3
    },
    {
      type: "RECOMMENDED VARIETIES",
      desc: "Seedless varieties will produce smaller grapes.",
      date: new Date(),
      isNew: true,
      style: 4
    },
    {
      type: "Pruning Grapes",
      desc: "Pruning is very important. Grapes produce fruit on shoots growing off of one-year-old canes.",
      date: new Date(),
      isNew: true,
      style: 5
    }
  ]

  public weatherData: any = {};

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
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
