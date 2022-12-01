import axios from "axios"
export const tanentPostaction=(data,token)=>{
    return((dispatch)=>{
      axios.post(`http://localhost:3050/api/tanent`,data,{headers:{Authorization :`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data,"res")
           dispatch({type:"ADDTANENT",payload:res.data})
        })
        .catch((e)=>{
          console.log(e)
        })
    })
}
export const tanentgetaction=(token)=>{
    
  return((dispatch)=>{
    axios.get(`http://localhost:3050/api/tanent`,{headers:{Authorization :`Bearer ${token}`}})
    .then((res)=>{
        console.log(res.data,"res")
       dispatch({type:"GETTANENT",payload:res.data})
    })
    .catch((e)=>{
      console.log(e)
    })
  })
}

export const tanentdeleteaction=(id,token)=>{
    
  return((dispatch)=>{
      axios.delete(`http://localhost:3050/api/tanent/${id}`,{headers:{Authorization :`Bearer ${token}`}})
      .then((res)=>{
          console.log(res.data,"res")
        dispatch({type:"DELETETANENT",payload:res.data})
      })
      .catch((e)=>{
        console.log(e)
      })
    })
}