const exprress=require("express")
const mongodb=require("./confg/database")
const route=require("./confg/router")
const cors=require("cors")
//const mongoose =require("mongoose")

const app=exprress()
const port =3050
app.use(exprress.json())
app.use(cors())
mongodb()

app.use("/",route)



app.listen(port,()=>{
    console.log("set up")
})