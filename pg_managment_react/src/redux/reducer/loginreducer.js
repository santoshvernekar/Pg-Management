const  initialvalue={}

const loginreducer=(state=initialvalue,action)=>{
    switch(action.type){
        case "LOGINADD":{
              return action.payload
        }
        case "DELETETOKEN":{
            return initialvalue
        }
        default:{
           return {...state}
        }
    }
}
export default loginreducer