// Dividir laço (Split Loop)

// Antes
function calculateSalary(people) {
    let youngest = people[0]?.age || Infinity
    let totalSalary = 0

    for(const p of people) {
        if(p.age < youngest) youngest = p.age
        totalSalary += p.totalSalary
    }

    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`
}


// Depois 
function calculateSalary(people) {
    return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`
}

function totalSalary(people){
    return people.reduce((total, p) => total + p.salary, 0)
}

function youngestAge(people){
    return Math.min(...people.map(p=> p.age))
}