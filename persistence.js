const getAllSquares = () => {
    return [{
        id: "1",
        side: "2",
        area: "4",
        figure_type: "square"
    },{
        id: "3",
        side: "6",
        area: "36",
        figure_type: "square"
    }]
}
const printAllSquares = () => {
    console.log(getAllSquares())
}
module.exports = {
    getAllSquares: getAllSquares,
    printAllSquares: printAllSquares
}
