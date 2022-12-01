const initialvalue=[]

const roomreducer=(state=initialvalue,action)=>{
        switch(action.type){
            case "ADDROOM":{
              return [...state,action.payload]
            }
            case "GETROOM":{
                return [...action.payload]
            }
            case "DELETEROOM":{
                return state.filter((ele)=>{
                    return ele._id!==action.payload._id
                })
            }
            default:{
                return [...state]
            }
        }
}
export default roomreducer