const Producer = require("./Producer")

class Province {
    #name
    #producers
    #totalProduction
    #demand
    #price

    constructor(doc){
        this.#name = doc.name
        this.#producers = []
        this.#totalProduction = 0
        this.#demand = doc.demand
        this.#price = doc.price
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)))
    }

    addProducer(arg){
        this.#producers.push(arg)
        this.#totalProduction += arg.production
    }

    get name(){
        return this.#name
    }
    
    get producers(){
        return this.#producers
    }
    
    get totalProduction(){
        return this.#totalProduction
    }

    get demand(){
        return this.#demand
    }

    get price(){
        return this.#price
    }

    
    set totalProduction(arg){
        this.#totalProduction = arg
    }

    set demand(arg){
        this.#demand = parseInt(arg)
    }

    set price(arg){
        this.#price = parseInt(arg)
    }

    get shortfall(){
        return this.demand - this.totalProduction
    }

    get satisfiedDemand(){
        return Math.min(this.demand, this.totalProduction)
    }

    get demandValue(){
        return this.satisfiedDemand * this.price
    }

    get demandCost(){
        let remainingDemand = this.demand
        let result = 0
        this.producers
        .sort((a,b) => a.cost - b.cost)
        .forEach(p => {
            const contribution = Math.min(remainingDemand, p.production)
            remainingDemand -= contribution
            result += contribution * p.cost
        })
        return result
    }

    get profit(){
        return this.demandValue - this.demandCost
    }

    
}

module.exports = Province