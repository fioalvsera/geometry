const lowerThanTen = (value, index, array) => {
    console.log(array)
    console.log(index)
    return value < 10
}

const higherThanTen = (value) => {
    return value > 10
}

module.exports = {
    lowerThanTen,
    higherThanTen
}