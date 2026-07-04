const express = require("express")

const app = express()

app.get("/", (req, res, next) => {
    res.json({
        data: "Welcome to Cloud Kitchen API",
        message: "This is a REST API for Cloud Kitchen Application",
        status: "Success",
        options: null
    })
})

module.exports = app;