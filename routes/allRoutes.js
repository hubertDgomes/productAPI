import express from "express"
import sendData from "../controllers/sendData.js"
import showData from "../controllers/showData.js"
import otpVerify from "../controllers/otpVarify.js"
import loginController from "../controllers/loginController.js"
import redirectMiddleware from "../middleware/redirectMiddleware.js"
import dashboard from "../controllers/dashboard.js"
import logoutController from "../controllers/logoutController.js"
const router = express.Router()
router.use(express.json())

router.post("/send", sendData)
router.get("/show", showData)
router.post("/otp", otpVerify)
router.post("/login", loginController)
router.get("/logout", logoutController)
router.get("/dashboard", redirectMiddleware , dashboard)

export default router