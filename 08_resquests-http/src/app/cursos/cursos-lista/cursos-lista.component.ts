import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { Observable,  Subject, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[] = [];

  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService){}

  ngOnInit() {
    // this.service.list()
    //   .subscribe(
    //     dados => this.cursos = dados, // Atribuindo os dados à variável cursos
    //   );
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      //map(),
      //tap(),
      //switchMap(),
      catchError(error =>{
        console.error(error);
        this.error$.next(true);
        return EMPTY;
      })
    )
  }
}
