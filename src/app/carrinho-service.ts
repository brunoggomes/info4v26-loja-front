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

  constructor() {
    let itens = this.recuperarCarrinhoSessao()

    if (itens) {
      this.#_itens.set(itens)
    }
  }
 
   adicionar(novo: Item): boolean {
    if (this.estaAdicionado(novo)) {
      this.aumentarQuantidade(novo)
      this.salvarCarrinhoSessao()
      return false
    }

    this.#_itens.update(lista => [...lista, novo])
    this.salvarCarrinhoSessao()
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

  /** Salva as informações na sessão do navegador */
  salvarCarrinhoSessao() {
    sessionStorage.setItem('CARRINHO_LOJAIF', 
                           JSON.stringify(this.#_itens()))
  }

  recuperarCarrinhoSessao(): Item[] | null {
    let itens = sessionStorage.getItem('CARRINHO_LOJAIF')
    if (itens) {
      return JSON.parse(itens)
    }
    return null
  }
}
