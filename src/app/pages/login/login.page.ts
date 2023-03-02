import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {

  constructor(private readonly router: Router) { }

  // redirects the user to the pokemon-catalogue page,
  // when login button is clicked and login is successful
  handleLogin(): void {
    this.router.navigateByUrl("/pokemon-catalogue")
  }

}
