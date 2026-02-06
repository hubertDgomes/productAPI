import express from "express"
import productSend from "../controllers/productSend.js"
import productShow from "../controllers/productShow.js"
import subCatControllers from "../controllers/subCatControllers.js"
import subCatDelController from "../controllers/subCatDelController.js"
const router = express.Router()

router.post("/send" , productSend)
router.get("/show" , productShow)
router.post("/createSub" , subCatControllers)
router.post("/subdelete/:id" , subCatDelController)

export default router