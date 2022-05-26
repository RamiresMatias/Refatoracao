// Decompor condicional (Decompose Conditional)

// Antes

function mainV1() {
    let charge
    if(!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
        charge = quantity * plan.summerRate
    else 
        charge = quantity * plan.regularRate + plan.regularServiceCharge
}

// Depois

function mainV2() {
    let charge = summer() ? summerCharge() : regularCharge()
}

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
}

function summerCharge() {
    return quantity * plan.summerRate
}

function regularCharge() {
    quantity * plan.regularRate + plan.regularServiceCharge 
}