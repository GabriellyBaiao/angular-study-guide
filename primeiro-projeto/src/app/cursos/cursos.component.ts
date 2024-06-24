import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor(){
    this.nomePortal = 'http://loaine.training';

    for(let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }

  ngOnInit() {

  }
}
