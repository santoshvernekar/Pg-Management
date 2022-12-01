const buildingmodel=require("../module/buildingmodel")

const buildingcontroller={}


buildingcontroller.list=(req,res)=>{
    let id=req.user._id.toString()
    console.log(id,"iddddd")
    buildingmodel.find({ownerId:id})
      .then((catogar)=>{
           res.json(catogar)
      })
      .catch((err)=>{
          res.json(err)
      })
}
buildingcontroller.add=(req,res)=>{
    let id=req.user._id.toString()
    let body=req.body

   const catogar=new buildingmodel(body)

    if(id===catogar.ownerId.toString()){
        catogar.save()
        .then((catogar)=>{
             res.json(catogar)
        })
        . catch((error)=>{
             res.json(error)
        })
    }
   
}  

buildingcontroller.findId=(req,res)=>{
 const id=req.params.id
 let userid=req.user._id.toString()
 buildingmodel.findById(id)
  .then((catogar)=>{
     if(userid===catogar.ownerId.toString()){
        res.json(catogar)
     }else{
        res.json({error:"userid not matched"})
     }
  })
  .catch(()=>{
      res.json(catogar)
  })
}
buildingcontroller.upd=(req,res)=>{
        const id=req.params.id
        const body=req.body
        let userid=req.user._id.toString()
        buildingmodel.findById(id)
         .then((building)=>{
            if(userid===building.ownerId.toString()){
                buildingmodel.findByIdAndUpdate(id,body ,{new:true})
                .then((catogar)=>{
                    res.json(catogar)
                })
                .catch((error)=>{
                    res.json(error)
                })
            }else{
                 res.json({error:"user not found"})
            }
         })
       
       
}

buildingcontroller.dlt=(req,res)=>{
    const id=req.params.id
    let userid=req.user._id
    buildingmodel.findOne({_id:id,ownerId:userid})
     .then((building)=>{
        buildingmodel.findByIdAndDelete(building._id)
        .then((catogar)=>{
            res.json(catogar)
        })
        .catch((error)=>{
            res.json(error)
        })
     })
    
}

module.exports=buildingcontroller