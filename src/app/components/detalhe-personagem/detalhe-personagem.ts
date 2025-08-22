import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personagens } from '../../services/personagens';


// Definindo uma interface para o objeto
interface IPersonagens {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-detalhe-personagem',
  imports: [],
  templateUrl: './detalhe-personagem.html',
  styleUrl: './detalhe-personagem.css'
})


export class DetalhePersonagem implements OnInit {
  // personagens: any;
  //  constructor(private route: ActivatedRoute) {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log('ID do produto:', id);
  // }
  idPersonagem: number = 0;
  personagem?: IPersonagens;

  constructor(private route: ActivatedRoute, private servico: Personagens) {
  }


  ngOnInit(): void {
//     this.idPersonagem = this.route.snapshot.paramMap.get('id') as number;
//     this.idPersonagem = Number(this.route.snapshot.paramMap.get('id'));
//     this.personagem = this.servico.getPersonagemPorId(this.idPersonagem), subscribe((personagem) => this.personagem{
// // this.

    })



  }
