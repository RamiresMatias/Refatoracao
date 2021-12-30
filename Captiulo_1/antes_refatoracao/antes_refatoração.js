function main(){
    let invoice = require('../invoice.json')
    let plays = require('../plays.json')
    statement(invoice[0], plays)
}


function statement(invoice, plays) {
    let totalAmount = 0
    let volumeCredits = 0
    let result = `Statement for ${invoice.customer}\n`
    const format = new Intl.NumberFormat('en-US', 
                {style: "currency", currency: "USD", minimumFractionDigits: 2}).format


    for(let perf of invoice.performances){

        const play = plays[perf.playID]
        let thisAmount = 0

        switch (play.type) {
            case "tragedy":
                thisAmount = 40000
                if(perf.audience > 30) thisAmount += 1000 * (perf.audience - 30)

                break;
            case "comedy":
                if(perf.audience > 20) thisAmount += 10000 + 500 * (perf.audience - 20)

                thisAmount += 300 * perf.audience
                break;
            default:
                throw new Error(`unknow type: ${play.type}`)
        }

        //soma créditos por voluma
        volumeCredits += Math.max(perf.audience - 30, 0)

        // Soma um crédito extra para cada dez espectadores de comédia
        if("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5)

        //Exibe a linha para a requisição

        result += ` ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats) \n`
        totalAmount+= thisAmount
    }
    console.log(result)
}

main()