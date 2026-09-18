const express=require("express")
const app=express()
const port =3000
const cors = require("cors")
const {connectDB} =require("./Config/database")
const route = require("./Routes/EmsRoutes")

app.use(express.json());

app.use(cors(
    {
        origin:"http://localhost:5173",
        methods:["GET","POST","PUT","DELETE"],
    }
));
app.use("/api/v1",route)
connectDB()

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})