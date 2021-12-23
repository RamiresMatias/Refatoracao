// Separar em fases (Split Phase)

// Antes
const orderData = orderString.split('/\s+/')
const productPrice = priceList[orderData[0].split('-')[1]]
const orderPrice = parseInt(orderData[1]) * productPrice


// Depois
const orderRecord = parserOrder(order)
const orderPrice = price(orderRecord, priceList)

function parserOrder(aString) {
    const values = aString.split('/\s+/')
    return ({
        productID: values[0].split('-')[1],
        quantity: parseInt(values[1])
    })
}

function price(order, priceList){
    return order.quantity * priceList[order.productID]
}