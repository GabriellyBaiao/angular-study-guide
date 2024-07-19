import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './cursos-lista/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.API)
      .pipe(
         tap(console.log)
      )
      ;
  }

}
