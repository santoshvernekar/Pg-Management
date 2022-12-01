const mongoose=require("mongoose");
const isEmail=require("validator/lib/isEmail");

const Schema=mongoose.Schema
const userschema=new Schema({
    name:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        min:10
    },
    username:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
       unique:true,
        validate:{
            validator: function(value){
                return isEmail(value)
            },
            message:function(){
               return `is invalid mail`
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    },
    confirmpassword:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    }
   
})

const Usermodel=mongoose.model("Usermodel",userschema)
console.log(Usermodel)

module.exports=Usermodel