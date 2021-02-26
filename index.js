const express = require("express")

const app = express()

const server = app.listen(3000, () => {
    console.log("Listening to requests on ports 3000")
})

// 👇 Static files
app.use(express.static('public'))