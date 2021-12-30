// Substituir variável temporária por consulta (Replace Temp With Query)

// Antes da Refatoração
class Order {
    #quantity
    #item

    constructor(quantity, item) {
        this.#quantity = quantity
        this.#item = item
    }

    get price() {
        let basePrice = this.#quantity * this.#item.price
        let discountFactor = 0.98
        if(basePrice > 1000) discountFactor -= 0.03
        return basePrice * discountFactor
    }
}


// Depois da Refatoração

class Order {
    #quantity
    #item

    constructor(quantity, item) {
        this.#quantity = quantity
        this.#item = item
    }

    get price() {
        return this.basePrice * this.discountFactor
    }

    get basePrice(){
        return this.#quantity * this.#item.price
    }

    get discountFactor(){
        let discountFactor = 0.98
        if(this.basePrice > 1000) discountFactor -= 0.03
        return this.basePrice * discountFactor
    }
}