import { Usuario } from './../../../../07_rotas/src/app/login/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements OnInit{
[x: string]: any;

  usuario: any = {
    nome: null,
    email: null
  }
  onSubmit(form: any){
    console.log(form);

    // console.log(this.usuario);

  }
  constructor(){}

  ngOnInit() {
  }
}
