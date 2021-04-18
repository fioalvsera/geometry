const geometry = require("./geometry.js")

let shape = process.argv[2] // [shape] cylynder || square
let infoBase = process.argv[3]
let infoHeight = process.argv[4]

let area = 0

switch(shape){

    case "square":

        area = geometry.getSquareArea(infoBase)
        console.log(`the side's length is ${infoBase} `)
        console.log(`the square's area is: ${area}`)
        break;

    case "cylinder":
        let volume = geometry.getCylinderVolume(infoBase, infoHeight)
        console.log(`the radio's length is ${infoBase}`)
        console.log(`the height is: ${infoHeight}`)
        console.log(`the cylinder's volume is: ${volume}`)
        break;

    case "rectangle":
        area = geometry.getRectArea(infoBase, infoHeight)
        console.log(`the base's length is ${infoBase}`)
        console.log(`the height is: ${infoHeight}`)
        console.log(`the rectangle's area is: ${area}`)
        break;

    case "circle":
        area = geometry.getCircleArea(infoBase)
        console.log(`the radio's length is: ${infoBase}`)
        console.log(`the circle's area is: ${area}`)
        break;

    default:
        console.log("that shape is not supported")


}
