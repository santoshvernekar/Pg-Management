const mongoose=require("mongoose")

const Schema=mongoose.Schema

const tanentschema=new Schema({
    name:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        min:[10, 'Must be at least 10, got {VALUE}']
        
    
    },
    adharenumber:{
        type:Number,
        min:12
        
        
    },
    adress:{
        type:String
    },
    ownerId:{
        type:Schema.Types.ObjectId,
        ref:"ownermodel",
        required:true
        
    },
    buildingId:{
        type:Schema.Types.ObjectId,
        ref:"buildingmodel",
        required:true
    },
    roomId:{
        type:Schema.Types.ObjectId,
        ref:"Roommodel",
        required:true
    }
})

const Tanentmodel=mongoose.model("Tanentmodel",tanentschema)

module.exports=Tanentmodel