//node index.js cylinder [radius] [height]
//node index.js square [side]

var shape = process.argv[2] // [shape] cylynder || square
 
if ( shape == "cylinder") {
  
  let firstNum = process.argv[3] // [radius] || [side]
  let secondNum = process.argv[4] // [height]

  console.log("cylinder")
  let radioBase = firstNum
  let height = secondNum
  console.log("the radio of the base is " + radioBase)
  console.log("the height is " + height)

  let area = (radioBase * radioBase) * 3.14
  let volume = area * height 
  console.log("the volume is " + volume)

} else if (shape == "square"){
  
  let firstNum = process.argv[3] // [radius] || [side]

  console.log("square")
  let side = firstNum
  console.log("the side's lenth is " + side)

  let area = side * side 
  console.log("the area is " + area) 

} else {
  console.log ("Sorry that geometric shape is not supported.")
}