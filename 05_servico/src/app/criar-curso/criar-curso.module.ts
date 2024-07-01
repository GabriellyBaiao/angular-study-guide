import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
   CommonModule,
  ],
  exports: [CriarCursoComponent],
  // providers: [CursosService]
})
export class CriarCursoModule { }
