import { Component } from '@angular/core';
import { StorageKeys } from 'src/app/enums/storage-keys.enum';
import { Router } from '@angular/router';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-logout-button',
  template: ` <button class="btn btn-danger btn-lg"(click)="handleLogout()">
                Logout
              </button>`,
  styles: [`button {
              margin: 50% 0%;
          }`]
})
export class LogoutButtonComponent {

  constructor(
    private readonly router: Router
  ){ }

  // deletes the current trainer's key from session storage
  // and reloads the page. Since no trainer is registered in
  // session storage, the user is redirected to the login page
  public handleLogout():void{
    if (window.confirm("Are you sure you want to logout?")) {
      StorageUtil.storageDelete(StorageKeys.Trainer)
      location.reload()
    }
  }
}

