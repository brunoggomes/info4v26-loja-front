import { computed, Service, signal } from '@angular/core';
import { Item } from './item';

@Service()
export class CarrinhoService {
  //Itens adicionados ao carrinho
  readonly #_itens = signal<Item[]>([])
  /*Atributo para expor a lista de itens como somente
    leitura para componentes externos ao serviço Carrinho
  */
  readonly itens = this.#_itens.asReadonly()
  readonly qtdItens = computed(() => {
    let qtd = 0
    this.#_itens().forEach(item => {
      qtd += item.quantidade
    })
    return qtd
  })

   adicionar(novo: Item): boolean {
    if (this.estaAdicionado(novo)) {
      this.aumentarQuantidade(novo)
      return false
    }

    this.#_itens.update(lista => [...lista, novo])
    return true
  }

  estaAdicionado(it: Item): boolean {
    return this.#_itens().some(
      item => item.produto?.id === it.produto?.id);
  }

  aumentarQuantidade(it: Item) {
    this.#_itens.update(lista =>
      lista.map(item => {
        if (item.produto?.id === it.produto?.id) {
          item.quantidade++;
        }

        return item;
      })
    );
  }
}
