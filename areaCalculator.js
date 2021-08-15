const geometry = require("./geometry.js");
const persistenceCsv = require("./persistenceCsv");
const { v4: uuidv4 } = require('uuid')
//const index = require("./index.js");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

async function readLineAsync(message) {
    return new Promise((resolve, reject) => {
        readline.question(message, (answer) => {
        resolve(answer);
        });
    });
}

const writeFigure = (side, area, figureType) => {
    let figureData = [{
        id: uuidv4(),
        side: side,
        area: area.toString(),
        figure_type: figureType
    }]
    console.log(figureData)
    console.log(`Writing ${figureData.length} figures in file history`)
    persistenceCsv.write(figureData)
    console.log("Figures have been written succesfully")
}

const runAreaCalculator = async function()  {
    const figure = await readLineAsync("What's your figure's name?")
    let area = 0
    let side = 0
    let figureType = ""
    let typeOfResult = "area"
    switch (figure) {
        case "square":
            const sideLength = await readLineAsync("What's your side's length?")
            side = `${sideLength}`
            console.log("Calculating area")
            area = geometry.getSquareArea(sideLength)
            figureType = "square"
            break;

        case "rectangle":
            const heightRectangle = await readLineAsync("What's your height's length?")
            const baseRectangle = await readLineAsync("What's your bases's length?")
            side = `${baseRectangle} & ${heightRectangle}`
            console.log("Calculating area")
            area = geometry.getRectArea(baseRectangle,heightRectangle)
            figureType = "rectangle"
            break;

        case "cylinder":
            const baseCylinder = await readLineAsync("What's your radio's length?")
            const heightCylinder = await readLineAsync("What's your height?")
            side = `${baseCylinder} & ${heightCylinder}`
            console.log("Calculating volume")
            area = geometry.getCylinderVolume(baseCylinder,heightCylinder)
            typeOfResult = "volume"
            figureType = "cylinder"
            break;

        case "circle":
            const radio = await readLineAsync("What's your radio's length?")
            side = `${radio}`
            console.log("Calculating area")
            area = geometry.getCircleArea(radio)
            figureType = "circle"
            break;
    }
    console.log(`the ${typeOfResult} of the figure is ${area}`)
    writeFigure(side, area, figureType)
}

module.exports = {
    runAreaCalculator: runAreaCalculator
}
