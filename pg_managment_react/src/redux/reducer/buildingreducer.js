let initialvalue=[]

const buildingreducer=(state=initialvalue,action)=>{
    switch(action.type){
        case "ADDBUILDING":{
          return [...state,action.payload]
        }
        case "GETBUILDING":{
            return [...action.payload]
        }
        case "DELETEBUILDING":{
            return state.filter((ele)=>{
                return ele._id!==action.payload._id
            })
        }
       default:{
        return [...state]
       }
    }
}
export default buildingreducer