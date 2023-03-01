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

  public handleLogout():void{
    if (window.confirm("Are you sure you want to logout?")) {
      StorageUtil.storageDelete(StorageKeys.Trainer)
      location.reload()
    }
  }
}

