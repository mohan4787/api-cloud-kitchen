const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.json({
        data: "Welcome to Cloud Kitchen API",
        message: "This is a REST API for Cloud Kitchen Application",
        status: "Success",
        options: null
    })
})
router.post("/login", (req, res, next) => {
    res.json({
        data: "Welcome to Cloud Kitchen API",
        message: "This is a login route for Cloud Kitchen Application",
        status: "Success",
        options: null
    })
})

module.exports = router;
