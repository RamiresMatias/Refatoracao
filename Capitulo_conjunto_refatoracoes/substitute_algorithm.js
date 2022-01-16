// Substituir Algoritmo

// Antes 
function foundPerson(people) {
    for(let i = 0; i < people.length; i++){

        if(people[i] === "Don") {
            return "Don"
        }

        if(people[i] === "John") {
            return "John"
        }

        if(people[i] === "Kent") {
            return "Kent"
        }

    }
}

// Depois

function foundPerson(people) {
    const candidates = ["Don", "John", "Kent"]
    return candidates.find(p => people === p) || ''
}