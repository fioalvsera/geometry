const persistence = require("./persistenceCsv.js")

let newFiguresData = [{
    id: "6",
    side: "2",
    area: "4",
    figure_type: "square"
},{
    id: "7",
    side: "6",
    area: "36",
    figure_type: "square"
}]

// read all figures
console.log(`reading figures from file: ${persistence.FILE_ADDRESS}`)
let allFigures = persistence.getAll()
console.log(`${allFigures.length} figures have been read`)

// write new array of figures in the file in Csv format
console.log(`writing figures in ${persistence.FILE_ADDRESS}`)
persistence.write(newFiguresData)

console.log(`${newFiguresData.length} new figures have been written`)

// exports
module.exports = {
    newFiguresData: newFiguresData
}
