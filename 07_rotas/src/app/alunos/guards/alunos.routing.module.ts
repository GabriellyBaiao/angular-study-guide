import { CanDeactivateFn } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { Component, NgModule } from "@angular/core";
import { AlunosModule } from './alunos.module';
import { AlunoDetalheComponent } from '../aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';
import { AlunosGuard } from '../../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './aluno-detalhe.resolver';

const alunosRoutes = [
  { path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
       { path: 'novo', component:  AlunoFormComponent },
       { path: ':id', component:  AlunoDetalheComponent
          resolve: { aluno : AlunoDetalheResolver }
       },
       { path: ':id/editar', component:  AlunoFormComponent
            CanDeactivate: [AlunosDeactivateGuard]
        },
  ] },
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}
