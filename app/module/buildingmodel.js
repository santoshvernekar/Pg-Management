const mongoose=require("mongoose")

const Schema=mongoose.Schema
//console.log(Schema)
const buildingSchema=new Schema({
       buildingname:{type:String ,required:true,  unique: true},
       totalroom:{type:Number,required:true},
       adress:{type:String},
       ownerId:{ type:Schema.Types.ObjectId , ref:"Usermodel",required:true}
})


const buildingmodel=mongoose.model("buildingmodel",buildingSchema)

module.exports=buildingmodel