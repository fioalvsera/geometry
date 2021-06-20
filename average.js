const geometry = require("./geometry.js")

const getAvg = function(data) {
    //declare variables
    let values = []
    let sum = 0
    let average = 0
    let i = 0

    //logic of the function
    while(i < data.length) {
        values.push(geometry.getSquareArea(data[i]))
        sum = sum + values[values.length -1]
        i = i+1
        average = sum / values.length
    }

    //return value
    return average
}
// data = [4,3,2]

module.exports = getAvg
