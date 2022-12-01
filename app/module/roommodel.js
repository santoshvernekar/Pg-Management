const mongoose=require("mongoose")

const Schema=mongoose.Schema

const roomschema=new Schema({
    room_No:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    ownerId:{
        type:Schema.Types.ObjectId,
        ref:"Usermodel",
        required:true
    },
    buildingId:{
        type:Schema.Types.ObjectId,
        ref:"buildingmodel",
        required:true
    },
    buildingname:{
        type:String
    }
})

const Roommodel=mongoose.model("Roommodel",roomschema)

module.exports=Roommodel