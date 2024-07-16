import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null), //cada campo é um controle de formulário
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

}
