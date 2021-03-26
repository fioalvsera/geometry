//node index.js cylinder [radius] [height]
//node index.js square [side]

var shape = process.argv[2] // [shape] cylynder || square


siwtch(shape,);{
    case "cylinder";
        let radioBase = process.argv[3] // [radius] || [side]
        let height = process.argv[4] // [height]

        console.log("cylinder")
        console.log("the radio of the base is " + radioBase)
        console.log("the height is " + height)

        let area = (radioBase * radioBase) * 3.14
        let volume = area * height 
        console.log("the volume is " + volume)
        break;

    case "square";
        let side = process.argv[3] // [radius] || [side]

        console.log("square")
        console.log("the side's lenth is " + side)

        let area = side * side 
        console.log("the area is " + area) 
        break;

    default
        console.log ("Sorry that geometric shape is not supported.")
}   
