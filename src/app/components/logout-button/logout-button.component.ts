import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  constructor(
    private readonly router: Router
  ){ }

  public handleLogout():void{
    if (window.confirm("Are you sure you want to logout?")) {
      StorageUtil.storageDelete("pokemon-trainer")
      this.router.navigateByUrl("/login")
      location.reload()
    }
  }
}

