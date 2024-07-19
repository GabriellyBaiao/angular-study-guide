import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[] = [];

  cursos$!: Observable<Curso[]>;

  constructor(private service: CursosService){}

  ngOnInit() {
    // this.service.list()
    //   .subscribe(
    //     dados => this.cursos = dados, // Atribuindo os dados à variável cursos
    //   );
    this.cursos$ = this.service.list();
  }
}
