import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { FormsModule } from "@angular/forms";
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "../aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "../aluno-detalhe/aluno-detalhe.component";
import { AlunosService } from "./alunos.service";
import { AlunosDeactivateGuard } from "../../guards/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "./aluno-detalhe.resolver";



@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [
    AlunosService,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ],
})
export class AlunosModule { }
