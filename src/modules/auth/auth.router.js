const authCtrl = require("./auth.controller");
const bodyValidator = require("../../middlewares/request-validate.middleware");
const { RegisterDTO, LoginDTO, ForgetPasswordDTO, ResetPasswordDTO, MeDTO, UpdateUserDTO, ResetPasswordRequestDTO } = require("./auth.validator");
const authRouter = require("express").Router();

authRouter.post("/register",bodyValidator(RegisterDTO), authCtrl.registerUser); 
authRouter.get("/active/:token",authCtrl.activateUser);
authRouter.post("/login",bodyValidator(LoginDTO), authCtrl.loginUser);
//authRouter.post("/forget-password",bodyValidator(ResetPasswordRequestDTO), authCtrl.forgetPassword);
authRouter.get("/forget-password/:token",authCtrl.forgetPasswordTokenVerify);
authRouter.put("/reset-password", authCtrl.resetPassword);
authRouter.get("/me",bodyValidator(MeDTO), authCtrl.loggedInUserProfile);
authRouter.get("/logout",authCtrl.loggoutUser);
authRouter.put("/user/:id",authCtrl.updateUserById);

module.exports = authRouter;