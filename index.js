const persistence = require("./persistenceCsv.js")
const areaCalculator = require("./areaCalculator.js")
const { runAreaCalculator } = require("./areaCalculator.js")

areaCalculator.runAreaCalculator().then(() => {
    console.log("The program has finished.")
    process.exit(0)
}).catch((e) => {
    console.log("an error occured:")
    console.log(e)
    process.exit(2)
})
