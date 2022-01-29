// Move field (Mover campo)

// Antes
class Customer {
    #name
    #discountRate
    #contract

    constructor(name, discountRate) {
        this.#name = name
        this.#discountRate = discountRate
        this.#contract = new CustomerContract(new Date())
    }

    get discountRate() {
        return this.#discountRate
    }

    becomePreferred(){
        return this.#discountRate += 0.03
    }

    applyDiscount(amount) {
        return amount.substract(amount.multiply(this.#discountRate))
    }
}

class CustomerContract {
    #startDate
    constructor(startDate){
        this.#startDate = startDate
    }
}


// Depois
class Customer {
    #name
    #discountRate
    #contract

    constructor(name, discountRate) {
        this.#name = name
        this.setDiscountRate(discountRate)
        this.#contract = new CustomerContract(new Date())
    }

    get discountRate() {
        return this.#contract.discountRate
    }

    setDiscountRate(aNumber) {
        this.#contract.discountRate = aNumber
    }

    becomePreferred(){
        this.setDiscountRate(this.discountRate + 0.03)
    }

    applyDiscount(amount) {
        return amount.substract(amount.multiply(this.#discountRate))
    }
}

class CustomerContract {
    #startDate
    #discountRate

    constructor(startDate, discountRate){
        this.#startDate = startDate
        this.#discountRate = discountRate
    }

    get discountRate() {
        return this.#discountRate
    }

    set discountRate(arg) {
        this.#discountRate = arg
    }
}