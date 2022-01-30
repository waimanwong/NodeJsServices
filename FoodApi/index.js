const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const bodyParser = require("body-parser")

const dotenv = require("dotenv")
dotenv.config()


const mongoose = require("mongoose")
const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@my-cluster.4uq9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(mongoString)
mongoose.connect(mongoString)
mongoose.connection.on("error", function(error) {
    if(process.env.NODE_ENV === "development") {
        console.log(error)
    }
})
mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database")
})

const PORT = process.env.PORT || 5000
const app = express()

app.use(helmet())
app.use(cors({
    origin: process.env.NODE_ENV === "development" ? "*" : /domain\.com$/
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT, function() {
    console.log(`Express app is listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});