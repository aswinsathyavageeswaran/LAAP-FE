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
    if (this.username == this.user.name && this.password == this.user.password) {
      this.router.navigateByUrl("/dashboard");
    }
    else {
      this.hasError = true;
    }
  }

}
