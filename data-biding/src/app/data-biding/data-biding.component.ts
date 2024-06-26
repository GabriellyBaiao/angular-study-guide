import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  // styleUrl: './data-biding.component.css'
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class DataBidingComponent implements OnInit {

  url: string = 'http//loiane.com'
  cursoAngular: boolean = true;
  urlImagem = 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;
  nome: string | undefined;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  atualizarNome(event: Event): void {
    const inputElement = event.target as HTMLInputElement | null;
    if (inputElement && inputElement.value) {
      this.nome = inputElement.value;
    }
  }

  constructor() { }

  ngOnInit() {

  }
}
