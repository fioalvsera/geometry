const getSquareArea = function(side){
    return side * side
}

const getRectArea = function(base, height){
    return base * height
}

const getCircleArea = function(radio){
     return (radio * radio) * 3.14
}

const getCylinderVolume = function(radio,height){
    let area = getCircleArea(radio)
    return area * height
}


let g = {
    "getSquareArea": getSquareArea,
    "getRectArea": getRectArea,
    "getCircleArea": getCircleArea,
    "getCylinderVolume": getCylinderVolume
}

let a = "fo"

module.exports = g
