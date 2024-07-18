import { Component, OnInit, Directive } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'base-form',
  template: '', // O template pode ser vazio, já que este é um componente abstrato
})
export abstract class BaseFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit(): void;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('Formulário inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);

      if (controle) {
        controle.markAsDirty();
        controle.markAsTouched();
        if (controle instanceof FormGroup || controle instanceof FormArray) {
          this.verificaValidacoesForm(controle);
        }
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    const control = this.formulario.get(campo);
    return control && !control.valid && (control.touched || control.dirty);
  }

  verificaRequired(campo: string) {
    const control = this.formulario.get(campo);
    return control && control.hasError('required') && (control.touched || control.dirty);
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    return campoEmail && campoEmail.errors && campoEmail.errors['email'] && campoEmail.touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}
