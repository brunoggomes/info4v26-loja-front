import { Service, signal } from '@angular/core';
import { Item } from './item';

@Service()
export class CarrinhoService {
    //Itens adicionados ao carrinho
    readonly #_itens = signal<Item[]>([])

    /*Atributo para expor a lista de itens como somente
      leitura para componentes externos ao serviço Carrinho
    */
    readonly itens = this.#_itens.asReadonly()

    adicionar(it: Item) {
        
    }
}
