const fs = require('fs')
const csv = require('csv')
const parse = require('csv-parse/lib/sync')
const stringify = require("csv-stringify/lib/sync")

const FILE_ADDRESS = "/home/fiorellaalvarado/code/geometry/history.csv"

const getAllByType = (figureType) => {

    const data = fs.readFileSync(address, 'utf8')
    let parsedData = parse(data, {columns: true})
    let figures = []

    for(let i = 0; i < parsedData.length; i = i + 1){
        if(parsedData[i]['figure_type'] === figureType){
            figures.push((parsedData[i]))
        }
    }

    return figures
}

const getAllCircles = () => getAllByType("circle")

const getAllSquares = () => getAllByType("square")

const printAllSquares = () => {
    console.log(getAllSquares())
}

const printAllCircles = () => {
    console.log(getAllCircles())
}

const write = (figuresData) => {
    if(!validateHistoryExists()) initFile()

    const data = stringify(figuresData, {
        header: false,
        columns: ["id", "side", "area", "figure_type"]
    })
    fs.appendFileSync(FILE_ADDRESS, data)
}

const initFile = () => {
    const data = stringify([], {
        header: true,
        columns: ["id", "side", "area", "figure_type"]
    })
    fs.appendFileSync(FILE_ADDRESS, data)
}

const validateHistoryExists = () => {
    return fs.existsSync(FILE_ADDRESS)
}

const getAll = () => {
    let figuresData = fs.readFileSync(FILE_ADDRESS, 'utf8')
    return parse(figuresData, {columns: true})
}


module.exports = {
    getAllSquares: getAllSquares,
    getAllCircles: getAllCircles,
    printAllSquares: printAllSquares,
    printAllCircles: printAllCircles,
    write: write,
    getAll: getAll,
    FILE_ADDRESS: FILE_ADDRESS
}
