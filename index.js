import express from "express"
import dbConfigure from "./config/dbConfigure.js"
const app = express()
import routes from "./routes/allRoutes.js"
import productAPI from "./routes/productAPI.js"
import session from "express-session"

app.use(express.json())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get("/",(req,res)=>{
    res.send("Server is running!")
})
dbConfigure()
app.use("/api" , routes)
app.use("/product" , productAPI)
app.listen(3000,()=>{
    console.log("Server is running at 3000");
})