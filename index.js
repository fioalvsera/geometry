const { exit } = require("process")
const runAreaCalculator = require("./areaCalculator.js")

runAreaCalculator().then(() => {
    console.log("end")
    exit()
})