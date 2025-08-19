import { Routes } from '@angular/router';
import { ListaPersonagem } from './components/lista-personagem/lista-personagem';

export const routes: Routes = [
    {
        path:'',
        component: ListaPersonagem
    },
      {
        path:'/home',
        component: ListaPersonagem
    },
     {
        path:'/home/:id',
        component: ListaPersonagem
    },
];
