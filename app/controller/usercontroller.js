const Usermodel =require("../module/usermodel")
const bcryptjs=require("bcrypt")
const jwd=require("jsonwebtoken")

const usercontroller={}


usercontroller.register=(req,res)=>{
    const body=req.body
    console.log(body)
    const user=new Usermodel(body)
            bcryptjs.genSalt()
              .then((slat)=>{
                  bcryptjs.hash(user.password,slat)
                    .then((encurpte)=>{
                        user.password=encurpte
                         console.log(user,"gggggggggg")
                            user.save()
                                .then((user)=>{
                                   
                                    res.json(user)
                                  
                                })
                                .catch((error)=>{
                                    res.json(error)
                                })
                    })
                    .catch(()=>{

                    })
              })
              .catch(()=>{

              })
      
    
}

usercontroller.login=(req,res)=>{
    let body=req.body

    Usermodel.findOne({email:body.email})
        .then((user)=>{
        
            if(user){
                bcryptjs.compare(body.password,user.password)
                .then((match)=>{
                   if(match){
                    
                       const tokendata={
                             _id:user.id,
                             Email:user.email,
                             Username:user.username
                       }
                       const token=jwd.sign(tokendata,"dct123",{expiresIn:"2d"})
                        
                       res.json({
                              token:`Bearer ${token}`
                       })
                   }
                   else{
                       res.json({error:"not found"})
                   }
                })
                .catch((e)=>{
                  res.json(e)
                })

            }else{
                
               res.json({
                errors:"invalid passsowrd and email"
               })
            }
            
           
          
            
        })
        .catch((e)=>{
           res.json(e)
        })
       
}
usercontroller.account=(req,res)=>{
     const id=req.user._id.toString()
     console.log(id)
      Usermodel.findOne({_id:id})
       .then((registeruser)=>{
          res.json(registeruser)
       })
       .catch((e)=>{
         res.json(e)
       })
}



module.exports=usercontroller