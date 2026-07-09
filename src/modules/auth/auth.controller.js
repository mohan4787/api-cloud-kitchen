class  AuthController {
    registerUser = (req, res, next) => {
        res.json({
            data: null,
            message: "Welcome to Cloude Kitchen Register API",
            status: "SUCCESS",
            options: null
        })
    }

    activateUser = (req, res, next) => {
        let params = req.params;
        const headers = req.headers;
        const query = res.query;
        res.json({
            data: {
                params,
                headers,
                query
            },
            message: "Welcome to Cloude Kitchen Activate API",
            status: "SUCCESS",
            options: null
        })
    };

    loginUser = (req, res,next) => {
        res.json({
            data: "",
            message: "Welcome to Cloude Kitchen Login API",
            status: "SUCCESS",
            options: null
        })
    };

    forgetPasswordRequest = (req, res, next) => {
        res.json({
            data: "",
            message: "Welcome to Clode Kitchen Forget Password API",
            status: "SUCCESS",
            options: null
        })
    };

    forgetPasswordTokenVerify = (req, res, next) => {
        res.json({
            data: "",
            message: "Welcome to Cloude Kitchen Forget Password Token Verify API",
            status: "SUCCESS",
            options: null
        })
    };
    
    resetPassword = (req, res, next) => {
    res.json({
      data: null,
      message: "Welcome to Cloude Kitchen Reset-Password API",
      status: "SUCCESS",
      options: null,
    });
  };
  loggedInUserProfile = (req, res, next) => {
    res.json({
      data: "",
      message: "Welcome to Cloude Kitchen Me API",
      status: "SUCCESS",
      options: null,
    });
  };
  loggoutUser = (req, res, next) => {
    res.json({
      data: "",
      message: "Welcome to Cloude Kitchen Logout API",
      status: "SUCCESS",
      options: null,
    });
  };
  updateUserById = (req, res, next) => {
    res.json({
      data: req.params.id,
      message: "Welcome to Cloude Kitchen Update User Profile API",
      status: "SUCCESS",
      options: null,
    });
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;