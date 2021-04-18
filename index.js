const geometry = require("./geometry.js")

console.log("areas:")
console.log("square's:" + geometry.getSquareArea(5))
console.log("rectangle's: " + geometry.getRectArea(5,2))
console.log("circle's: " + geometry.getCircleArea(2))
console.log("cylinder's: " + geometry.getCylinderVolume(2,3))
