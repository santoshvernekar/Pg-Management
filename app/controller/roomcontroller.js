const Roommodel=require("../module/roommodel")

const roomcontroller={}


roomcontroller.list=(req,res)=>{
    let id=req.user._id.toString()
    console.log(id,"iddddd")
    Roommodel.find({ownerId:id})
      .then((catogar)=>{
           res.json(catogar)
      })
      .catch((err)=>{
          res.json(err)
      })
}

roomcontroller.add=(req,res)=>{
    let id=req.user._id.toString()
    let body=req.body

   const room=new Roommodel(body)

    if(id===room.ownerId.toString()){
        room.save()
        .then((room)=>{
             res.json(room)
        })
        . catch((error)=>{
             res.json(error)
        })
    }
   
}  

// roomcontroller.findId=(req,res)=>{
//  const id=req.params.id
//  let userid=req.user._id.toString()
//   Roommodel.findById(id)
//   .then((room)=>{
//      if(userid===room.ownerId.toString()){
//         res.json(room)
//      }else{
//         res.json({error:"userid not matched"})
//      }
//   })
//   .catch((e)=>{
//       res.json(room)
//   })
// }
roomcontroller.update=(req,res)=>{
        const id=req.params.id
        const body=req.body
        let userid=req.user._id.toString()
        console.log(userid)
        Roommodel.findById(id)
         .then((room)=>{
            if(userid===room.ownerId.toString()){
                Roommodel.findByIdAndUpdate(id,body,{new:true})
                .then((room)=>{
                    res.json(room)
                })
                .catch((error)=>{
                    res.json(error)
                })
            }else{
                 res.json({error:"user not found"})
            }
         })
       
       
}

roomcontroller.delete=(req,res)=>{
    const id=req.params.id
    let userid=req.user._id.toString()
    Roommodel.findOne({_id:id,ownerId:userid})
     .then((room)=>{
        Roommodel.findByIdAndDelete(room._id)
        .then((room)=>{
            res.json(room)
        })
        .catch((error)=>{
            res.json(error)
        })
     })
    
}

module.exports=roomcontroller