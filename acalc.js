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

function getSquareArea(side){
    console.log(side * side)
}

function getRectArea(base, height){
    console.log(base * height)
}

function getCircleArea(radio){
    console.log((radio * radio) * 3.14)
}

function getCylinderVolume(radio, height){
    let area = ((radio * radio) * 3.14) * height
    console.log(area)
}

const question = async () => {
    const figure = await readLineAsync("What's your figure's name?")
    switch (figure) {
        case "square":
            const sidelenght = await readLineAsync("What's your side's lenght?")
            getSquareArea(sidelenght)
            break;

        case "rectangle":
            const heightq = await readLineAsync("What's your height's lenght?")
            const baseq = await readLineAsync("What's your bases's lenght?")
            getRectArea(baseq,heightq)
            break;

        case "cylinder":
            const baser = await readLineAsync("What's your radio's lenght?")
            const height = await readLineAsync("What's your height?")
            getCylinderVolume(baser,height)
            break;

        case "circle":
            const radio = await readLineAsync("What's your radio's lenght?")
            getCircleArea(radio)
            break;
    }
}

question()