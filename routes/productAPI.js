import express from "express"
import productSend from "../controllers/productSend.js"
import productShow from "../controllers/productShow.js"
const router = express.Router()

router.post("/send" , productSend)
router.get("/show" , productShow)

export default router