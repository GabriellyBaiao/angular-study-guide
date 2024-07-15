import { map } from 'rxjs';
import { Usuario } from './../../../../07_rotas/src/app/login/usuario';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient){}

  ngOnInit() {
  }

  verificaValidTouched(campo: { valid: any; touched: any; }){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: { valid: any; touched: any; }){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: string) {
    // Remove caracteres não numéricos
    cep = cep.replace(/\D/g, '');

    // Expressão regular para validar CEP
    const validacep = /^[0-9]{8}$/;

    // Verifica se o CEP é válido
    if (validacep.test(cep)) {
      // Faz a requisição para a API de CEP
      // Faz a requisição para a API de CEP
      this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .pipe(
          map(dados => dados) // Transforma os dados se necessário
        )
        .subscribe(
          (dados: any) => console.log(dados),
        );
    }
  }
}
