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

  formulario!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
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
}
