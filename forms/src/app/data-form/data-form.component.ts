import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
verificaRequired(arg0: string): boolean {
throw new Error('Method not implemented.');
}

  formulario!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) {}

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),

      endereco: new FormGroup({
        cep: new FormControl(null)
      })
    });*/
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero:[null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado:[null, Validators.required]
      })
    });

    //Validators.minLength(3), Validators.maxLength(20)]
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', this.formulario.value)
      .pipe(
        map((dados: any) => dados) // Supondo que você queira transformar os dados da resposta
      )
      .subscribe({
        next: (dados: any) => {
          console.log(dados);
          // Reseta o formulário
           this.formulario.reset();
        },
        error: (error: any) => {
          alert('erro');
        }
      });
  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: any){

    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  verificaEmailInvalido(campo: string){
    let campoEmail = this.formulario.get('email');
    if (campoEmail && campoEmail.errors) {
      return campoEmail?.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  populaDadosForm(dados: any){
    this.formulario.patchValue({
      endereco:{
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
    this.formulario.get('nome')?.setValue('Gabrielly');
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco:{
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
  consultaCEP() {

    let cep = this.formulario.get('endereco.cep')?.value;

    cep = cep.replace(/\D/g, '');

    if (cep != "") {

      var validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)){
        this.resetaDadosForm();

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => this.populaDadosForm(dados));
      }
    }
  }
}
