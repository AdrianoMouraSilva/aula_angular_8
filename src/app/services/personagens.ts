import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export interface IPersonagens {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Injectable({
  providedIn: 'root'
})

export class Personagens {

  private baseUrl: string = 'http://localhost:3000'; // 🔗 URL da sua API

  // constructor(private http: HttpClient) {

  // }

  constructor(private httpClient: HttpClient) {

  }

  getDados(): Observable<IPersonagens[]> {
    return this.httpClient.get<IPersonagens[]>(`${this.baseUrl}/personagens`);
  }

  getPersonagemPorId(id: number) {
    return this.httpClient.get<IPersonagens>(`${this.baseUrl}/personagens/${id}`);
  }

  voltarPersonagem(id: number, totalVotos: number) {

    // Body: { "votos": NOVO_VALOR }

    return this.httpClient.patch<IPersonagens[]>(`${this.baseUrl}/personagens/${id}`, { votos: totalVotos + 1 });

    // const personagem = this.listarPersonagens.find(
    //   (itemLista, index, listarPersonagens) => itemLista.id === idDoPersonagem
    // )
    // personagem!.votos++;

  }

  metodoQualquer() {

    return this.httpClient.delete(`${this.baseUrl}`).subscribe({
      next: () => {
        console.log("Deu certo")
      },
      error: () => {
        console.log("Deu ruim")
      },
      complete: () => {
        console.log("Sempre vai se  executado")
      },
    });

  }

  // getDados(): Observable<IPersonagens[]> {
  //   return this.http.get<IPersonagens[]>(`${this.baseUrl}/personagens`)

  // }

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

  // adicionarVoto(idDoPersonagem: number) {
  //   const personagem_1 = this.listarPersonagens.find(
  //     (itemLista, index, listarPersonagens) => itemLista.id === idDoPersonagem
  //   )
  //   personagem_1!.votos++;

  // }

  // voltarPersonagem(id: number) {
  //   const personagem_2 = this.listarPersonagens.find(
  //     (itemLista) => itemLista.id === id
  //   )
  //   personagem_2!.votos++;

  // }


  // voltarPersonagem(id: number) {

  //   alert("ID = " + id);


  //   fetch(`http://localhost:3000/personagens/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ votos: 2 })
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Erro ao atualizar os votos');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log('Personagem atualizado:', data);
  //     })
  //     .catch(error => {
  //       console.error('Erro:', error);
  //     });

  //   // const personagem_2 = this.listarPersonagens.find(
  //   //   (itemLista) => itemLista.id === id
  //   // )
  //   // personagem_2!.votos++;

  // }






}
