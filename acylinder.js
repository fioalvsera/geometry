var radioBase = parseInt(process.argv[2])
var height = parseInt(process.argv[3])
console.log("the radio of the base is " + radioBase)
console.log("the height is " + height)

var area = (radioBase * radioBase) * 3.14
var volume = area * height
console.log("the volume is " + volume)
