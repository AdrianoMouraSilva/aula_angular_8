import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { Personagens } from '../../services/personagens';

// Definindo uma interface para o objeto
interface IPersonagens {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem implements OnInit, OnDestroy {

  listarPersonagens: IPersonagens[] = [];

  constructor(private personagens: Personagens) {
    // this.listarPersonagens = this.personagens.getPersonagens();
  }

  ngOnInit() {
    // alert('OnInit');
    console.log('OnInit');

    // this.listarPersonagens = this.personagens.getPersonagens();

    this.personagens.getDados().subscribe(
      personagens => {
        this.listarPersonagens = personagens
      }
    )

    console.log(this.personagens.getDados().subscribe({
      // next: (res) => this.IPersonagens = res,
      //error: (err) => console.error('Erro ao buscar dados', err)
    }));
  }

  ngOnDestroy() {
    alert('ngOnDestroy');
    // throw new Error('Method not implemented.');
  }

  // Criando um objeto usando a interface
  // https://rickandmortyapi.com/api/character/3
  // listarPersonagens: IPersonagens[] = [
  //   { id: 1, nome: 'Sanchez', imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', votos: 1 },
  //   { id: 2, nome: 'Morty Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', votos: 3 },
  //   { id: 3, nome: 'Summer Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', votos: 4 },
  //   { id: 4, nome: 'Beth Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', votos: 4 },
  //   { id: 5, nome: 'Jerry Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', votos: 0 },
  // ];

  // nomePersonagem = 'Rick Sanchez';
  // imagePersonagem = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
  // qtdVotosPersonagem = 0;

  // incremetarVotoPersonagem() {
  //   this.qtdVotosPersonagem++;
  // }

  // incremetarVotoPersonagem(id: number) {
  //   const personagem_1 = this.listarPersonagens.find(
  //     (itemLista, index, listarPersonagens) => itemLista.id === id
  //   )
  //   personagem_1!.votos++;
  //   // this.listarPersonagens[i].votos++;
  // }

  incremetarVotoPersonagem(id: number) {
    this.personagens.voltarPersonagem(id);
  }
}
