class NumberRange {
    
    #data

    constructor(range){
        this.#data = {
            min: range.temperatureFloor, 
            max: range.temperatureCeiling,
        }
    }

    get min() {return this.#data.min}
    get max() {return this.#data.max}
    contains(arg){ return (arg >= this.min && arg <= this.max)}
}

const station = {
    name: "ZB1",
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
}

function readingsOutsideRange(station, range){
    return station.filter(r => r.temp < range.min || r.temp > range.max)
}

const temperatureRange = {
    temperatureFloor: '2016-11-10 09:20',
    temperatureCeiling: '2016-11-10 09:40',
}

const range = new NumberRange(temperatureRange)

const alerts = readingsOutsideRange(station,range)