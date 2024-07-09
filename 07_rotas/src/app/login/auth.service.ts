import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAtenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'usuario@email.com' &&
    usuario.senha === '123456'){

        this.usuarioAtenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);

    } else {
      this.usuarioAtenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }
}
