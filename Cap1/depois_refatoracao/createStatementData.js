let plays = require('../plays.json')
let invoice = require('../invoice.json')
const PerformanceCalculator = require('./model/PerformanceCalculator')
const TragedyCalculator = require('./model/TragedyCalculator')
const ComedyCalculator = require('./model/ComedyCalculator')

function createStatementData(){
    const statementData = {}
    statementData.customer = invoice[0].customer
    statementData.performances = invoice[0].performances.map(enrichPerformances)
    statementData.totalAmount = totalAmount(statementData)
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)
    return statementData
}

function totalAmount(data){
    return data.performances.reduce((total ,p) => total += p.amount, 0)
}

function totalVolumeCredits(data){
    return data.performances.reduce((total , p) => total += p.volumeCredits, 0)
}


function playFor(aPerformance) {
    return plays[aPerformance?.playID]
}

function createPerformanceCalculator(aPerformance, aPlay) {
    switch (aPlay.type) {
        case "tragedy": return new TragedyCalculator(aPerformance, aPlay)
        case "comedy": return new ComedyCalculator(aPerformance, aPlay)
        default:
            break;
    }
    return new PerformanceCalculator(aPerformance, aPlay)
}

// function amountFor(aPerformance) {
//     return new PerformanceCalculator(aPerformance, playFor(aPerformance))
// }


function enrichPerformances(aPerformance){
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
    const result = Object.assign({}, aPerformance)
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    return result
}

module.exports = {
    createStatementData
}