import axios from "axios"

export const registeraction=(data)=>{
     //console.log(data,"dats")
    return((dispatch)=>{
        axios.post('http://localhost:3050/users/register',data)
          .then((res)=>{
             dispatch({type:"ADD",payload:res.data})
          })
          .catch((e)=>{
              console.log(e.message,"ee")
          })
    })
}
export const loginaction=(data)=>{
      
    return((dispatch)=>{
        axios.post(`http://localhost:3050/users/login`,data)
           .then((res)=>{
            console.log(res.data,"dddddd")
               dispatch({type:"LOGINADD",payload:res.data})
           })
           .catch((e)=>{
                 console.log(e)
           })
    })
}

export const accountaction=(data)=>{ 

    return{
        type:"ADDACCOUNT",
        payload:data
    }
    
}

export const accountactiondetails=(token)=>{
    
    return((dispatch)=>{
        axios.get(`http://localhost:3050/users/account`,{headers:{Authorization :`Bearer ${token}`}})
           .then((res)=>{
               dispatch({type:"GETACCOUNT",payload:res.data})
               console.log(res.data,"dcdevrvrvfrb")
           })
           .catch((e)=>{
                 console.log(e)
           })
    })

}

export const deletetoken=()=>{

    return{
        type:"DELETETOKEN",
        
    }
}