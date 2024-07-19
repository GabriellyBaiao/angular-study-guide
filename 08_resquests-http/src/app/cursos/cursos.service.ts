import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './cursos-lista/curso';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.API)
      .pipe(
         tap(console.log)
      )
      ;
  }

}
