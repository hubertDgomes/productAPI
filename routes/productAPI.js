import express from "express"
import productSend from "../controllers/productSend.js"
import productShow from "../controllers/productShow.js"
import subCatControllers from "../controllers/subCatControllers.js"
import subCatDelController from "../controllers/subCatDelController.js"
import subCatUpdate from "../controllers/subCatUpdate.js"
const router = express.Router()

router.post("/send" , productSend)
router.get("/show" , productShow)
router.post("/createSub" , subCatControllers)
router.patch("/subupdate/:id" , subCatUpdate)
router.delete("/subdelete/:id" , subCatDelController)

export default router