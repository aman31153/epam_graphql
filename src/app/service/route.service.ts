import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(public router:Router) { }

  public getRoute(key:string):any{
    switch (key) {
      case 'router1':
      return this.router.navigate(['router1'])

      case 'router2':
       return this.router.navigate(['router2'])
        
      default:
       return this.router.navigate([key])
    }
  }
}
