import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'] // Corrigi o nome da propriedade para 'styleUrls'
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[] = [];

  // Injete o serviço no construtor
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loaine.training';
  }

  ngOnInit() {
    // Use o serviço dentro do hook ngOnInit
    this.cursos = this.cursosService.getCursos();
  }
}
