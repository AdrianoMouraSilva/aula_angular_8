import { Injectable } from '@angular/core';

interface IPersonagens {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Injectable({
  providedIn: 'root'
})

export class Personagens {
  listarPersonagens: IPersonagens[] = [
    { id: 1, nome: 'Sanchez', imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', votos: 1 },
    { id: 2, nome: 'Morty Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', votos: 3 },
    { id: 3, nome: 'Summer Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', votos: 4 },
    { id: 4, nome: 'Beth Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', votos: 4 },
    { id: 5, nome: 'Jerry Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', votos: 0 },
  ];

  // constructor(private votacaoService: VotacaoService) { }

  getPersonagens() {
    return this.listarPersonagens;
    // this.qtdVotosPersonagem++;
  }

}
