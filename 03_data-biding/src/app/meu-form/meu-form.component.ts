import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css'
})
export class MeuFormComponent {

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Gabrielly',
    idade: 20,
  }

  atualizarNome(event: Event): void {
    const inputElement = event.target as HTMLInputElement | null;
    if (inputElement && inputElement.value) {
      this.nome = inputElement.value;
    }
  }

}
