const mongoose=require("mongoose")

const mongodb=()=>{
    mongoose.connect("mongodb://localhost:27017/may-2026")
  .then(()=>{
       console.log("connected to database")
  })
  .catch(()=>{
        console.log("not connected")
  })
}

module.exports=mongodb