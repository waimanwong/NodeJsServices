const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()

app.listen(PORT, function() {
    console.log(`Express app is listening on port ${PORT}`)
})