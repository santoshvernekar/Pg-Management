let initialvalue=[]
const userreducer=(state=initialvalue,action)=>{
       switch(action.type){
        case "ADDACCOUNT":{
            return [action.payload]
        }
        case "GETACCOUNT":{
            return [action.payload]
        }
        default:{
            return [...state]
        }
       }
}
export default userreducer