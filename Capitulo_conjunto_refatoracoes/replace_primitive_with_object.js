// Substituir primitivo por objeto (Replace primitive with Object)

class Order {
    #priority
    constructor(data){
        this.#priority = new Priority(data.priority)
    }

    get priority(){
        return this.#priority
    }

    get priorityString(){
        this.#priority.toString()
    }

    set priority(aString){
        this.#priority = new Priority(aString)
    }
}

// highPriorityCount = order.filter(o => "high" === o.priority || "rush" === o.priority).length
const priorities = ['high','rush']
highPriorityCount = order.filter(o => priorities.includes(o.priorityString())).length

// Criando uma classe para prioridade, o que antes era uma variável primitiva
// Agora é uma classe 
class Priority {
    #value
    constructor(value) {
        this.#value = value
    }

    toString(){
        return this.#value
    }
}