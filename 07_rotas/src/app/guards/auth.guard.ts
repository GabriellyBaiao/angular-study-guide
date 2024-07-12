import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, CanLoad, GuardResult, MaybeAsync, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('AuthGuard');
    return this.verificarAcesso();
  }

    private verificarAcesso(){
      if(this.authService.usuarioEstaAtenticado()){
        return true;
      }
    }

    this.router.navigate(['/login']);

    return false;
  }
  canLoad(route: Router): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificando se usuário por carregar o cód do módulo');

    return this.verificarAcesso();
  }
  }
}
