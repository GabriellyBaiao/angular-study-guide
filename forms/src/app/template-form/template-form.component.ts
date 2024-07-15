import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements OnInit{
[x: string]: any;

  onSubmit(form: any){
    console.log(form)

  }
  constructor(){}

  ngOnInit() {
  }
}
