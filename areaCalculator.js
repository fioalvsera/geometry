const geometry = require("./geometry.js")

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

const runAreaCalculator = async function()  {
    const figure = await readLineAsync("What's your figure's name?")
    let area = 0
    switch (figure) {
        case "square":
            const sideLength = await readLineAsync("What's your side's length?")
            area = geometry.getSquareArea(sideLength)
            console.log(area)
            break;

        case "rectangle":
            const heightRectangle = await readLineAsync("What's your height's length?")
            const baseRectangle = await readLineAsync("What's your bases's length?")
            area = geometry.getRectArea(baseRectangle,heightRectangle)
            console.log(area)
            break;

        case "cylinder":
            const baseCylinder = await readLineAsync("What's your radio's length?")
            const heightCylinder = await readLineAsync("What's your height?")
            area = geometry.getCylinderVolume(baseCylinder,heightCylinder)
            console.log(area)
            break;

        case "circle":
            const radio = await readLineAsync("What's your radio's length?")
            area = geometry.getCircleArea(radio)
            console.log(area)
            break;
    }
}

module.exports = runAreaCalculator
