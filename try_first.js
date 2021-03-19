
var firstNum = process.argv[2]
var secondNum = process.argv[3]
 

if ( secondNum != undefined && firstNum != undefined){

console.log("cilindro")
var radioBase = firstNum
var height = secondNum
console.log("the radio of the base is " + radioBase)
console.log("the height is " + height)

var area = (radioBase * radioBase) * 3.14
var volume = area * height 
console.log("the volume is " + volume)

} else if (firstNum != undefined){
 console.log(" cuadrado")
var side = firstNum
console.log("the side's lenth is " + side)

var area = side * side 
console.log("the area is " + area) 
} else {
    console.log ("sorry")
}