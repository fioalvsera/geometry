//node index.js cylinder [radius] [height]
//node index.js square [side]

var shape = process.argv[2] // [shape] cylynder || square
var firstNum = process.argv[3] // [radius] || [side]
var secondNum = process.argv[4] // [height]
 
if ( shape == "cylinder") {
  
  console.log("cylinder")
  var radioBase = firstNum
  var height = secondNum
  console.log("the radio of the base is " + radioBase)
  console.log("the height is " + height)

  var area = (radioBase * radioBase) * 3.14
  var volume = area * height 
  console.log("the volume is " + volume)

} else if (shape == "square"){
  
  console.log("square")
  var side = firstNum
  console.log("the side's lenth is " + side)

  var area = side * side 
  console.log("the area is " + area) 

} else {
  console.log ("Sorry that geometric shape is not supported.")
}