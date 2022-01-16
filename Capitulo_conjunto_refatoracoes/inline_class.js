// Internalizar classe (Inline class) 
// Inversa de: Extrair classe (Extract Class)

// Antes da Refatoração

class TrackingInformation {
    #shippingCompany
    #trackingNumber

    get shippingCompany() {
        return this.#shippingCompany
    }

    set shippingCompany(arg) {
        this.#shippingCompany = arg
    }

    get trackingNumber(){
        return this.#trackingNumber
    }

    set trackingNumber(arg) {
        this.#trackingNumber = arg
    }


    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`
    }
}

class Shipment {
    #trackingInformation = new TrackingInformation()

    get trackingInfo(){
        return this.#trackingInformation.display()
    }

    get trackingInformation(){
        return this.#trackingInformation
    }

    set trackingInformation(arg) {
        this.#trackingInformation = arg
    }
}

// Depois da Refatoração

class Shipment {
    #trackingInformation
    #shippingCompany
    #trackingNumber

    get trackingInfo(){
        return `${this.shippingCompany}: ${this.trackingNumber}`
    }

    get trackingInformation(){
        return this.#trackingInformation
    }

    set trackingInformation(arg) {
        this.#trackingInformation = arg
    }


    get shippingCompany() {
        return this.#shippingCompany
    }

    set shippingCompany(arg) {
        this.#shippingCompany = arg
    }

    get trackingNumber(){
        return this.#trackingNumber
    }

    set trackingNumber(arg) {
        this.#trackingNumber = arg
    }
}