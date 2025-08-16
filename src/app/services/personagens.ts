import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


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

  private baseUrl = 'http://localhost:3000/personagens'; // 🔗 URL da sua API

  constructor(private http: HttpClient) {

  }

  getDados(): Observable<IPersonagens[]> {
    return this.http.get<IPersonagens[]>(`${this.baseUrl}`)
      //.pipe(catchError(this.handleError));
  }

  // private
  private listarPersonagens: IPersonagens[] = [
    // { id: 1, nome: 'Sanchez', imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', votos: 1 },
    // { id: 2, nome: 'Morty Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', votos: 3 },
    // { id: 3, nome: 'Summer Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', votos: 4 },
    // { id: 4, nome: 'Beth Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', votos: 4 },
    // { id: 5, nome: 'Jerry Smith', imagem: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', votos: 0 },
  ];


  // getPersonagens() {
  //   return this.listarPersonagens;
  // }

  adicionarVoto(idDoPersonagem: number) {
    const personagem_1 = this.listarPersonagens.find(
      (itemLista, index, listarPersonagens) => itemLista.id === idDoPersonagem
    )
    personagem_1!.votos++;

  }

  voltarPersonagem(id: number) {
    const personagem_2 = this.listarPersonagens.find(
      (itemLista) => itemLista.id === id
    )
    personagem_2!.votos++;

  }






}
