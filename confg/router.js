const express =require("express")

const route=express.Router()

const buildingcontroller=require("../app/controller/buildingcontroller")
const usercontroller =require("../app/controller/usercontroller")
const tanentcontroller=require("../app/controller/tanentcontroller")
const roomcontroller=require("../app/controller/roomcontroller")
const {authenticate}=require("../midleware/authenticate")


route.post("/users/register",usercontroller.register)
//route.get("/users/register",usercontroller.register)
route.post("/users/login" ,usercontroller.login)
route.get("/users/account",authenticate,usercontroller.account)

route.get("/api/building",authenticate,buildingcontroller.list)
route.post("/api/building",authenticate,buildingcontroller.add)
// route.get("/api/building/:id",authenticate,buildingcontroller.findId)
// route.put("/api/building/:id",authenticate,buildingcontroller.upd)
route.delete("/api/building/:id",authenticate,buildingcontroller.dlt)


route.get("/api/room",authenticate,roomcontroller.list)
route.post("/api/room",authenticate,roomcontroller.add)
//route.get("/api/room/:id",authenticate,tanentcontroller.findId)
route.put("/api/room/:id",authenticate,roomcontroller.update)
route.delete("/api/room/:id",authenticate,roomcontroller.delete)


route.get("/api/tanent",authenticate,tanentcontroller.list)
route.post("/api/tanent",authenticate,tanentcontroller.add)
route.get("/api/tanent/:id",authenticate,tanentcontroller.findId)
route.put("/api/tanent/:id",authenticate,tanentcontroller.update)
route.delete("/api/tanent/:id",authenticate,tanentcontroller.delete)



module.exports=route
