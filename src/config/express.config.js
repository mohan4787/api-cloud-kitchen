const express = require("express")
const router = require("./router.config")
const app = express()

app.use('/api/v1/', router)

app.use((req, res, next) => {
    next({
        code: 404,
        message: "Router not found",
        status: "NOT_FOUND"
    })
})

app.use((error, req,res, next) => {
    let code = error.code || 500;
    let details = error.details || null;
    let msg = error.message || "Internal server error";
    let status = error.status || "INTERNAL_SERVER_ERROR";

    res.status(code).json({
        error: details,
        message: msg,
        status: status,
        options: null
    })
})

module.exports = app;