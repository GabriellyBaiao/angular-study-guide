import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursoService: CursosService;

  constructor(private cursoService: CursosService){
    // this.cursoService = new CursosService();
    // this.cursoService = _cursoService;
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    )
      // function (curso){
      //   console.log(curso);
      // }

  }

}
