import { Produto } from "./produto";

export class Item {
    _produto: Produto | undefined
    _quantidade: number = 0

    constructor(prod: Produto, qnt: number) {
        this.produto = prod

        if (qnt > 0) {
            this.quantidade = qnt
        }
    }
    set produto(p: Produto) {
        this._produto = p
    }
    get produto(): Produto | undefined {
        return this._produto
    }
    set quantidade(q: number) {
        if (q >= 0) {
            this._quantidade = q
        }
    }
    get quantidade(): number {
        return this._quantidade
    }
}