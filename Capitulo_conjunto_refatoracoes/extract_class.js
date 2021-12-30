// Extrair classe (Extract Class)
// Inversa de Internalizar classe (Inline Class) 


// Antes da Refatoração

class Person {
    #name
    #telephoneNumber
    #officeAreaCode
    #officeNumber 

    get name(){
        return this.#name
    }

    set name(name){
        this.#name = name
    }

    get telephoneNumber(){
        return this.#telephoneNumber
    }

    get officeAreaCode(){
        return this.#officeAreaCode
    }

    set officeAreaCode(number){
        this.#officeAreaCode = number
    }

    get officeNumber(){
        return this.#officeNumber
    }

    set officeNumber(number){
        this.#officeNumber = number
    }
}

// Deposi da Refatoração

class Person {
    #name
    #telephoneNumber

    constructor(){
        this.#telephoneNumber = new TelephoneNumber() 
    }

    get name(){
        return this.#name
    }

    set name(name){
        this.#name = name
    }

    get telephoneNumber(){
        return this.#telephoneNumber.toString()
    }

    get officeAreaCode(){
        return this.#telephoneNumber.areaCode
    }

    set officeAreaCode(number){
        this.#telephoneNumber.areaCode = number
    }

    get officeNumber(){
        return this.#telephoneNumber.number
    }

    set officeNumber(number){
        this.#telephoneNumber.number = number
    }
}

class TelephoneNumber {
    #areaCode
    #number 

    get areaCode(){
        return this.#areaCode
    }

    set areaCode(number){
        this.#areaCode = number
    }

    get number(){
        return this.#number
    }

    set number(number){
        this.#number = number
    }

    get toString(){
        return `${this.areaCode} ${this.number}`
    }
}