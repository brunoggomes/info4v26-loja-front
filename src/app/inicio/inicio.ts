import { Component, inject, OnInit, signal } from '@angular/core';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-inicio',
  styleUrl: './inicio.scss',
  templateUrl: './inicio.html',
})
export class Inicio implements OnInit {
  readonly #loja = inject(LojaService)
  readonly #carrinho = inject(CarrinhoService)

  protected readonly produtos = 
    signal<Produto[]>([])

  ngOnInit(): void {
    this.#loja.obterProdutos().subscribe(res => {
      this.produtos.set(res)
    })
  }

  adicionar(p: Produto) {
    //Criar um item a partir do produto a ser adicionado
    //adicionar o item ao carrinho
    
  }
}
