import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "./aluno";
import { AlunosService } from "./alunos.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService){
  }

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
      ): Observable<any>|any {

      console.log('AlunosDetalheResolver')

      let id =  route.params['id'];

      return this.alunosService.getAluno(id);
    }
}
