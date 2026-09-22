import { Routes } from '@angular/router';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'produtos/:id', component: ProdutoDetalhe},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];
