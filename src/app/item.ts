import { Produto } from "./produto";

export class Item {
    #_produto: Produto 
    #_quantidade: number = 0
    constructor(prod: Produto, qnt: number) {
        this.#_produto = prod

        if (qnt > 0) {
            this.#_quantidade = qnt
        }
    }
    set produto(p: Produto) {
        this.#_produto = p
    }
    get produto(): Produto {
        return this.#_produto
    }
    set quantidade(q: number) {
        if (q >= 0) {
            this.#_quantidade = q
        }
    }
    get quantidade(): number {
        return this.#_quantidade
    }
}