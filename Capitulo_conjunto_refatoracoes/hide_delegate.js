// Ocultar Delegação (Hide Delegate)

class Person {
    #name
    #department

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name
    }

    get department() {
        return this.#department
    }

    set department(arg) {
        this.#department = arg
    }
}

class Department {
    #chargeCode
    #manager

    get chargeCode(){
        return this.#chargeCode
    }

    set chargeCode(arg){
        this.#chargeCode = arg
    }

    get manager(){
        return this.#manager
    }

    set manager(arg){
        this.#manager = arg
    }
}

// Um cliente deseja saber quem é o gerente de uma pessoa
// Para isso utiliza o seguinte código
const manager = aPerson.department.manager

/**
 * Claramente o cliente consegue visualizar uma classe department, e monitora informações
 * e como funciona, então terá que reduzir esse acoplamento criando um método de delegação
 */

class PersonRefactor {
    #department

    get manager () {
        return this.#department.manager
    }
}