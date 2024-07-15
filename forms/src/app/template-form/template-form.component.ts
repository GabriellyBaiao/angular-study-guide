import { Usuario } from './../../../../07_rotas/src/app/login/usuario';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
  onSubmit(form: any) {
  console.log(form);

    // console.log(this.usuario);

    this.http.post('https://httpbin.org/get', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(dados => console.log(dados));

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

  consultaCEP(cep: string, form: any) {
    // Remove caracteres não numéricos
    cep = cep.replace(/\D/g, '');

    if (cep != ""){
      //expressao regular para validar o cep
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosForm(form);

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .pipe(
            map((dados: any) => dados) // Use o operador map do rxjs/operators
          )
          .subscribe((dados: any) => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, formulario) {
    // form.setValue({
    //   nome: form.value.nome,
    //   email: form.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    resetaDadosForm(formulario){
      formulario.form.patchValue({
        endereco: {
          rua: null,
          complemento: null,
          bairro: null,
          cidade: null,
          estado: null
        }
      })
    }
  }
}



