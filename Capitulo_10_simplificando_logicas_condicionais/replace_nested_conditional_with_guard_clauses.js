/* Substituir condicional aninhada por cláusulas de guarda 
    (Replace Nested Conditional with Guard Clauses)
*/

// Antes

function payAmount(employee) {
    let result
    if(employee.isSeparated) {
        result = {amount: 0, reasonCode: "SEP"}
    } else {
        if(employee.isRetired) {
            result = {amount: 0, reasonCode: "RET"}
        } else {
            // Lógica para calcular o valor
        }
    }

    return result
}

// Depois 

function payAmountRef(employee) {
    if(employee.isSeparated) return result = {amount: 0, reasonCode: "SEP"}
    if(employee.isRetired) return result = {amount: 0, reasonCode: "RET"}

    // Função que calcula o valor
    return someFinalComputation()
}