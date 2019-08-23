import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(
    // private authService:AuthserviceService,
    private routerService: Router
  ) {

  }
  // tslint:disable-next-line: max-line-length
  // cancanActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
  //   if(this.authService.isLoggedIn()){
  //     return true
  //   }else{
  //     this.router.navigate(['cockpit'])
  //     return false;
  //   }
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
       return new Promise(resolve => {
         return true;
       });
      }
  }
