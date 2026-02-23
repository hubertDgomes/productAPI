import express from "express"
import productSend from "../controllers/productSend.js"
import productShow from "../controllers/productShow.js"
import multer from "multer"
// const upload = multer({ dest: 'uploads/' })
const router = express.Router()

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

router.post("/send", upload.single('image'), productSend)
router.get("/show", productShow)


export default router