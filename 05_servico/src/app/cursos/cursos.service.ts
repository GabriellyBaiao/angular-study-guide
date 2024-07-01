import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  private cursos: string[] = ['Angular', 'Java', 'PhoneGap']

  constructor(){
    console.log('CursoService');
  }

  getCursos(){
   return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}