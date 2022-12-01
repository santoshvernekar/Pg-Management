const Tanentmodel=require("../module/tanentmodel")

const tanentcontroller={}

tanentcontroller.list=(req,res)=>{
    let id=req.user._id.toString()
    
    Tanentmodel.find({ownerId:id})
      .then((tanent)=>{
          res.json(tanent)
      })
      .catch((erorr)=>{
           res.json(erorr)
      })
}
tanentcontroller.add=(req,res)=>{
    let id=req.user._id.toString()
    const body=req.body
    const tanent=new Tanentmodel(body)
    if(id===tanent.ownerId.toString()){
        tanent.save()
        .then((tanent)=>{
           res.json(tanent)
        })
        .catch((erorr)=>{
            res.json(erorr)
        })
    }else{
        res.json({erorr:"user not found"})
    }
  

}
tanentcontroller.findId=(req,res)=>{
   let id=req.params.id
    let userid=req.user._id.toString()
    Tanentmodel.findById(id)
    .then((tanent)=>{
        if(userid===tanent.ownerId.toString()){
            res.json(tanent)
         }else{
            res.json({error:"userid not matched"})
         }
    })
    .catch((error)=>{
        res.json(error) 
    })
}

tanentcontroller.update=(req,res)=>{
   id=req.params.id
   body=req.body
   let userid=req.user._id.toString()
   Tanentmodel.findById(id)
    .then((tanent)=>{
       if(userid===tanent.ownerId.toString()){
           Tanentmodel.findByIdAndUpdate(id,body ,{new:true})
           .then((tanent)=>{
               res.json(tanent)
           })
           .catch((error)=>{
               res.json(error)
           })
       }else{
            res.json({error:"user not found"})
       }
    })
    .catch((e)=>{
       res.json(e)
    })
}

tanentcontroller.delete=(req,res)=>{
 let id=req.params.id
 let userid=req.user._id.toString()
 Tanentmodel.findOne({_id:id,ownerId:userid})
 .then((tanent)=>{
    Tanentmodel.findByIdAndDelete(tanent._id)
    .then((tanent)=>{
        res.json(tanent)
    })
    .catch((error)=>{
        res.json(error)
    })
 })
 .catch((e)=>{
    res.json(e)
 })

}

module.exports=tanentcontroller