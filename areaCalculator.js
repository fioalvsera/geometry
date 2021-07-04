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
            const sideLenght = await readLineAsync("What's your side's lenght?")
            area = geometry.getSquareArea(sideLenght)
            console.log(area)
            break;

        case "rectangle":
            const heightq = await readLineAsync("What's your height's lenght?")
            const baseq = await readLineAsync("What's your bases's lenght?")
            area = geometry.getRectArea(baseq,heightq)
            console.log(area)
            break;

        case "cylinder":
            const baser = await readLineAsync("What's your radio's lenght?")
            const height = await readLineAsync("What's your height?")
            area = geometry.getCylinderVolume(baser,height)
            console.log(area)
            break;

        case "circle":
            const radio = await readLineAsync("What's your radio's lenght?")
            area = geometry.getCircleArea(radio)
            console.log(area)
            break;
    }
}

module.exports = runAreaCalculator
