// const geometry = require("./geometry.js")

// let data = [5,6,8,2,7,1,5]
// let data2 = [8,6,3]
// let data3 = [8,2,4,5]
// let data4 = [8,6,2]
// let data5 = [6,2,7,3]
// console.log(`Data's size: ${data.length}`)
// console.log(data)

// const printAvg = function(data) {
//     let i = 0
//     let average = 0
//     let sum = 0
//     let values = []

//     while(i < data.length) {
//         values.push(geometry.getSquareArea(data[i]))
//         sum = sum + values[values.length -1]
//         i = i +1
//     }
//     average = sum / values.length
//     console.log(`the average of the areas is: ${average}`)
// }
// printAvg(data2)

// printAvg(data3)

// printAvg(data)

// printAvg(data4)

// printAvg(data5)



//Imprimir el promedio de todas las areas calculadas con data

// let shape = process.argv[2] // [shape] cylynder || square
// let infoBase = process.argv[3]
// let infoHeight = process.argv[4]

// let area = 0

// switch(shape){

//     case "square":

//         area = geometry.getSquareArea(infoBase)
//         console.log(`the side's length is ${infoBase} `)
//         console.log(`the square's area is: ${area}`)
//         break;

//     case "cylinder":
//         let volume = geometry.getCylinderVolume(infoBase, infoHeight)
//         console.log(`the radio's length is ${infoBase}`)
//         console.log(`the height is: ${infoHeight}`)
//         console.log(`the cylinder's volume is: ${volume}`)
//         break;

//     case "rectangle":
//         area = geometry.getRectArea(infoBase, infoHeight)
//         console.log(`the base's length is ${infoBase}`)
//         console.log(`the height is: ${infoHeight}`)
//         console.log(`the rectangle's area is: ${area}`)
//         break;

//     case "circle":
//         area = geometry.getCircleArea(infoBase)
//         console.log(`the radio's length is: ${infoBase}`)
//         console.log(`the circle's area is: ${area}`)
//         break;

//     default:
//         console.log("that shape is not supported")


// }

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let animals = [
    {
        "name": "Viena",
        "race": "monkey"
    },
    {
        "name": "Dino",
        "race": "dinosaur"
    },
    {
        "name": "luis",
        "race": "dog"
    },
    {
        "name": "Pluto",
        "race": "dog"
    }
]

async function readLineAsync(message) {
    return new Promise((resolve, reject) => {
        readline.question(message, (answer) => {
        resolve(answer);
        });
    });
}
const cat = async () => {
    const name = await readLineAsync("What's your name?")
    const race = await readLineAsync("What's your race?")
    let user = {"name": name, "race": race}
    animals.push(user)
    console.log(animals)
}

cat()
/* const first = (number) => {
    console.log("adios" + number)
}

const second = (pepito) => {
    console.log("hola")
    console.log("fin")
    pepito(5)
}

second(first)

const third = number => {
    console.log("anything" + number)
}

second(third)
second((number)=> {console.log(number + 1)}) */
