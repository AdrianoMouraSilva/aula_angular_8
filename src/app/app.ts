import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
// import { DetalhePersonagem } from './components/detalhe-personagem/detalhe-personagem';
// import { ListaPersonagem } from "./components/lista-personagem/lista-personagem";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('votacao-personagens');
}


