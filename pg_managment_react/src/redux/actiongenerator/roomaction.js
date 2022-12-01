import axios from "axios";

export const roomaddaction=(data,token)=>{
  
     return((dispatch)=>{
      axios.post(`http://localhost:3050/api/room`,data,{headers:{Authorization :`Bearer ${token}`}} )
         .then((res)=>{
              dispatch({type:"ADDROOM",payload:res.data})
         })
         .catch((e)=>{
            console.log(e)
         })
     })
}

export const roomgetaction=(token)=>{
       
         
     return((dispatch)=>{
        axios.get(`http://localhost:3050/api/room`,{headers:{Authorization :`Bearer ${token}`}} )
           .then((res)=>{
                dispatch({type: "GETROOM",payload:res.data})
           })
           .catch((e)=>{
              console.log(e)
           })
       })
}

export const roomdeleteaction=(id,token)=>{
     
    return((dispatch)=>{
        axios.delete(`http://localhost:3050/api/room/${id}`,{headers:{Authorization :`Bearer ${token}`}} )
        .then((res)=>{
             dispatch({type: "DELETEROOM",payload:res.data})
        })
        .catch((e)=>{
           console.log(e)
        })
    })
    
}