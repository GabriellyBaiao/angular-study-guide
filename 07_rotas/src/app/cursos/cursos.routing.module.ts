import { CursosListaComponent } from './../../../../08_resquests-http/src/app/cursos/cursos-lista/cursos-lista.component';
import { CursoResolverGuard } from './../../../../08_resquests-http/src/app/cursos/guards/curso-resolver.guard';
import { CursosFormComponent } from './../../../../08_resquests-http/src/app/cursos/cursos-form/cursos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CursosListaComponent },
  {
    path: 'novo',
    component: CursosFormComponent,
    resolve: {
      curso: CursoResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component: CursosFormComponent,
    resolve: {
      curso: CursoResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
