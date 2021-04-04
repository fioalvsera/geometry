//node index.js cylinder [radius] [height]
//node index.js square [side]

var shape = process.argv[2] // [shape] cylynder || square

function getCylinderVolume(radio, height){
    let area = (radio * radio) * 3.14
    return area * height
}

function getSquareArea(side){
    return side * side
}

switch(shape){
    case "cylinder":
        let radioBase = process.argv[3] // [radius] || [side]
        let height = process.argv[4] // [height]

        console.log("cylinder")
        console.log("the radio of the base is " + radioBase)
        console.log("the height is " + height)

        let volume = getCylinderVolume(radioBase, height)
        console.log("the volume is " + volume)
        break;

    case "square":
        let side = process.argv[3] // [radius] || [side]

        console.log("square")
        console.log("the side's length is " + side)

        let area = getSquareArea(side)
        console.log("the area is " + area)
        break;

    default:
        console.log ("Sorry that geometric shape is not supported.")
}
