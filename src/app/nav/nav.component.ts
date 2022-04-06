import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() title: string = "";

  public displayUserMenu: boolean = false;
  public user: any;
  public nameStartsWith: string = "";

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.user = this.appService.user;
    this.nameStartsWith = this.user.name.charAt(0);
  }

  public signOut(): void {
    this.router.navigateByUrl("/login");
  }

}
