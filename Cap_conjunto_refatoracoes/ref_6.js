// Encapsulamento com registros aninhados
const {cloneDeep} = require('lodash')
clone()
//  -- Antes
const customerData = {
    "1920": {
        name: "Martin",
        id: "1920",
        usages: {
            "2016":{
                "1": 50,
                "2": 55,
            },
            "2015": {
                "1": 70,
                "2": 63,
            }
        }
    }
}


function compareUsage (customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month]
    const earlier = customerData[customerID].usages[laterYear - 1][month]
    return {laterAmount: later, change: later - earlier}
}

function getRawDataOfCustomers() {
    return customerData
}

function setRawDataOfCustomers(arg) {
    customerData = arg
}

// -- Depois

class CustomerData {
    #data
    constructor(data){
        this.#data = data
    }

    setUsage(customerID, year, month, amount){
        this.#data[customerID].usages[year][month] = amount
    }

    get rawData(){
        return cloneDeep(this.#data)
    }

    usage(customerID, year, month){
        return this.#data[customerID].usages[year][month]
    }
}

const customer = new CustomerData(customerData)

// Refatorando código para carregar um documento