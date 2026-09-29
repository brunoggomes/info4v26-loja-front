import { Produto } from "./produto";

export class Item {
    produto: Produto | undefined
    quantidade: number = 0

    constructor(prod: Produto, qnt: number) {
        this.produto = prod

        if (qnt > 0) {
            this.quantidade = qnt
        }
    }
}