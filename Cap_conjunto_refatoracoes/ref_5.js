// Separar em fases (Split Phase)

// Antes
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity
    const discount = Math.max(quantity - product.discountThreshold, 0) 
                        * product.basePrice * product.discountRate

    const shippingPercase = (basePrice > shippingMethod.discountThreshold) ? 
                            shippingMethod.discountedFee : shippingMethod.feePercase
    
    const shippingCost = quantity * shippingPercase
    const price = basePrice - discount + shippingCost
    return price
}

// Depois da refatoração

function priceOrder(product, quantity, shippingMethod) {
    // Fase 1
    const priceData = calculatePricingData(product, quantity)

    // Fase 2
    return shippingPercase(priceData, shippingMethod)
}

function applyShipping(priceData, shippingMethod) {
    const shippingPercase = (priceData.basePrice > shippingMethod.discountThreshold) ? 
    shippingMethod.discountedFee : shippingMethod.feePercase

    const shippingCost = priceData.quantity * shippingPercase
    return priceData.basePrice - priceData.discount + shippingCost
}


function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity
    const discount = Math.max(quantity - product.discountThreshold, 0) 
                        * product.basePrice * product.discountRate

    return {basePrice, quantity, discount} 
}