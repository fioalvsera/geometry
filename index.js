//node index.js cylinder [radius] [height]
//node index.js square [side]

var shape = process.argv[2] // [shape] cylynder || square
var infoBase = process.argv[3]
var infoHeight = process.argv[4]

function getSquareArea(side){
    return side * side
}

function getRectArea(base, height){
    return base * height
}

function getCircleArea(radio){
    return (radio * radio) * 3.14
}

function getCylinderVolume(radio,height){
    let area = getCircleArea(radio)
    return area * height
}
var area = 0


switch(shape){
    case "cylinder":

        console.log("cylinder")
        console.log("the radio of the base is " + infoBase)
        console.log("the height is " + infoHeight)

        let volume = getCylinderVolume(infoBase,infoHeight)
        console.log("the volume is " + volume)
        break;

    case "square":

        area = getSquareArea(infoBase)

        console.log("square")
        console.log("the side's length is " + infoBase)

        console.log("the area is " + area)
        break;

    case "rectangle":

        area = getRectArea(infoBase, infoHeight)

        console.log("rectangle")
        console.log(`the base's length is: ${infoBase}`)
        console.log(`the height's length is: ${infoHeight}`)

        console.log("the area is: " + area)
        break;

    case "circle":

        area = getCircleArea(infoBase)

        console.log("circle")
        console.log("the radio's base is:" + infoBase)

        console.log("the area is: " + area)
        break;

    default:
        console.log ("Sorry that geometric shape is not supported.")
}
