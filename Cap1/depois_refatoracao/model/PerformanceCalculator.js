class PerformanceCalculator {

    #performance
    #play

    constructor(aPerformance, aPlay){
        this.#performance = aPerformance
        this.#play = aPlay
    }

    get play (){
        return this.#play
    }

    get performance () {
        return this.#performance
    }

    get volumeCredits(){
        let result = 0
        result += Math.max(this.performance.audience - 30, 0)
    }
} 

module.exports = PerformanceCalculator