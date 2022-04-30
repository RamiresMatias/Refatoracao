// Substituir variável derivada por consulta (Replace Derived Variable with Query)

// Antes

class ProductionPlan {
    #production = null
    #adjustments = []

    get production() {
        return this.#production
    }

    applyAdjustment(anAdjustment) {
        this.#adjustments.push(anAdjustment)
        this.#production += anAdjustment.amount
    }
}



// Depois

class ProductionPlan {
    #production = null
    #adjustments = []

    get production() {
        return this.#adjustments.reduce((sum, a) => sum + a.amount, 0)
    }

    applyAdjustment(anAdjustment) {
        this.#adjustments.push(anAdjustment)
    }
}