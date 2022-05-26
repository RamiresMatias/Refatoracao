// Consolidar expressão condicional (Consolidate Conditional Expression)

// Antes

function disabilityAmount(anEmployee) {
    if(anEmployee.seniority < 2) return 0
    if(anEmployee.monthsDisabled > 12) return 0
    if(anEmployee.isPartTime) return 0
}

// Depois 

function disabilityAmount(anEmployee) {
    if(isNotEligableForDisability()) return 0
}

function isNotEligableForDisability(anEmployee) {
    return (
        (anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime)
    )
}