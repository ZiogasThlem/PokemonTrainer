import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TrainerService } from '../services/trainer.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {

  constructor(
    private readonly router: Router,
    private readonly traierService: TrainerService
  ) {}

  // redirects user to login page if trainer
  // doesn't exist in session storage
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (this.traierService.trainer) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
    }
}