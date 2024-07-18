import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, min } from 'rxjs/operators';
import { EstadoBr } from '../shared/models/estado-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;
  // estados!: EstadoBr[];
  estados!:Observable<EstadoBr[]>;
  cargos!: any[];
  tecnologias!: any[];
  newsletterOp!: any[];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
}
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {

    this.estados = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnoloigas();
    this.newsletterOp = this.dropdownService.getNewsletter();

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
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks();
    });

    //Validators.minLength(3), Validators.maxLength(20)]
  }

  buildFrameworks(){

    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));

    // this.formBuilder.array( [
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false)
    // ]);
  }

  requiredMinCheckbox(min = 1){
    // const validator = (formArray: FormArray) => {
    // const values = formArray.controls;
    // let totalChecked = 0;
    // for(let i=0; i< values.length; i++){
    //   if(values[i].value){
    //     totalChecked += 1;
    //   }
    // }
    const totalChecked = formArray.controls
      .map(v => v.value)
      .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }

  onSubmit() {
    console.log(this.formulario.value);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.framewoks[i] ? null )
        .filter(v => v !== null)
    })

    if(this.formulario.valid){
      this.http
      .post('https://httpbin.org/post', JSON.stringify(valueSubmit)
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
    } else {
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();

      if(controle  instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: any){

    return !this.formulario.get(campo)?.valid && (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty);
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

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados));
    }
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

    setarCargo() {
      const cargo =  {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
      this.formulario.get('cargo').setValue(cargo);
    }

    compararCargos(obj1, obj2){
      return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
    }

    setarTecnologias(){
      this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
    }

  }
function constructor(private: any, http: any, HttpClient: typeof HttpClient, private1: any, formBuilder: any, FormBuilder: typeof FormBuilder, private2: any, dropdownService: any, DropdownService: typeof DropdownService, private3: any, cepService: any, ConsultaCepService: typeof ConsultaCepService) {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function buildFrameworks() {
  throw new Error('Function not implemented.');
}

function requiredMinCheckbox(arg0: number) {
  throw new Error('Function not implemented.');
}

function onSubmit() {
  throw new Error('Function not implemented.');
}

function verificaValidacoesForm(formGroup: any, FormGroup: typeof FormGroup) {
  throw new Error('Function not implemented.');
}

function resetar() {
  throw new Error('Function not implemented.');
}

function verificaValidTouched(campo: any, any: any) {
  throw new Error('Function not implemented.');
}

function verificaEmailInvalido(campo: any, string: any) {
  throw new Error('Function not implemented.');
}

function aplicaCssErro(campo: any, string: any) {
  throw new Error('Function not implemented.');
}

function consultaCEP() {
  throw new Error('Function not implemented.');
}

function populaDadosForm(dados: any, any: any) {
  throw new Error('Function not implemented.');
}

function resetaDadosForm() {
  throw new Error('Function not implemented.');
}

function setarCargo() {
  throw new Error('Function not implemented.');
}

function compararCargos(obj1: any, obj2: any) {
  throw new Error('Function not implemented.');
}

function setarTecnologias() {
  throw new Error('Function not implemented.');
}

