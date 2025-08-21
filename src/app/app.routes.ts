import { Routes } from '@angular/router';
import { ListaPersonagem } from './components/lista-personagem/lista-personagem';
import { DetalhePersonagem } from './components/detalhe-personagem/detalhe-personagem';


export const routes: Routes = [
    {
        path: '',
        component: ListaPersonagem
    },
    {
        path: 'home',
        component: ListaPersonagem
    },
    {
        path: 'detalhe-personagem/:id',
        component: DetalhePersonagem
    },
];
