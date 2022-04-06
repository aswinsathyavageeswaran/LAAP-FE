import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'app';
  public isOuterPage: boolean = false;

  constructor(
    private router: Router,
    private appService: AppService
  ) {}

  public ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isOuterPage = false;
        if (event.url == "/" ||event.url == "/login" || event.url == "/register") {
          this.isOuterPage = true;
        }
      }
    });
  }
}
