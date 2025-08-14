import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-personagem',
  imports: [],
  templateUrl: './card-personagem.html',
  styleUrl: './card-personagem.css',
})
export class CardPersonagem {
  nome = input<string>();
  imagem = input<string>();
  totalVotos = input.required<number>();
  id = input.required<number>();

  votou = output<number>();
}
