const router = require("express").Router()
const authRouter = require("../modules/auth/auth.router")
router.get("/", (req, res, next) => {
    res.json({
        data: "Welcome to Cloud Kitchen API",
        message: "This is a REST API for Cloud Kitchen Application",
        status: "Success",
        options: null
    })
})

router.use("/auth", authRouter)

module.exports = router;
