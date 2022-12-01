import axios from "axios";

export const buildingaddaction=(body,token)=>{
    return((dispatch)=>{
        axios.post(`http://localhost:3050/api/building`,body,{headers:{Authorization :`Bearer ${token}`}})
         .then((res)=>{
            console.log(res.data)
              dispatch({type:"ADDBUILDING",payload:res.data})
         })
         .catch((e)=>{
            console.log(e)
         })
    })
}


export const buildinggetaction=(token)=>{

    return((dispatch)=>{
        axios.get(`http://localhost:3050/api/building`,{headers:{Authorization :`Bearer ${token}`}})
          .then((res)=>{
            console.log(res.data,"gettttttttttttttttttttttt")
             dispatch({type:"GETBUILDING",payload:res.data})
          })
          .catch((e)=>{
               console.log(e)
          })
    })
}

export const buildingdelete=(id,token)=>{
  return((dispatch)=>{
    axios.delete(`http://localhost:3050/api/building/${id}`,{headers:{Authorization :`Bearer ${token}`}})
    .then((res)=>{
       console.log(res.data,"dddddddddddddddddddd")
        dispatch({type:"DELETEBUILDING",payload:res.data})
    })
    .catch((e)=>{
        console.log(e)
    })
  })  
}

