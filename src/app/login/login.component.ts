import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public hasError: boolean = false;
  private user: any;

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.user = this.appService.user;
  }

  public redirectToReg(): void {
    this.router.navigateByUrl("/register");
  }

  public signIn(): void {
    this.appService.isLoading = true;
    var root = this;
    setTimeout(() => {
      if (root.username == root.user.name && root.password == root.user.password) {
        root.router.navigateByUrl("/dashboard");
      }
      else if (root.username == root.appService.bankUser.name && root.password == root.appService.bankUser.password) {
        root.router.navigateByUrl("/bank");
      }
      else {
        root.hasError = true;
      }
      root.appService.isLoading = false;
    }, 2000);
  }

}
