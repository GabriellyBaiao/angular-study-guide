import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Curso } from './cursos-lista/curso';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }

  override loadByID(id: any): Observable<Curso> {
    return of(null as unknown as Curso); // Implementação que retorna um observable
  }
}
