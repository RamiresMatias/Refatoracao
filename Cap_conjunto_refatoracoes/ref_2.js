// Extrair variável (Extract Variable)

// Antes refatoração
function price(order){
    return order.quantity * order.itemPrice - 
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
}


// Depois refatoração
function price(order){
    const basePrice = order.quantity * order.itemPrice
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
    const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100)
    return basePrice - quantityDiscount + shipping
}

/**
 * Apesar de ser uma função simples, com a refatoração fica muito mais 
 * fácil entender o que o código faz, sem a necessidade de inserir
 * comentários para explicar seu funcionamento
 */