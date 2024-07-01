import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'PhoneGap']

  constructor(){
    console.log('CursoService');
  }

  getCursos(){
   return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
