import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent implements OnInit{

  cursos: string[] = ['Angular', 'Java', 'Phonegap']

  constructor(){}

  ngOnInit(){
    for(let i = 0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }

}
