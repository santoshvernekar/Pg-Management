const initialValues=[]

const tanentreducer=(state=initialValues,action)=>{
        switch(action.type){
            case "ADDTANENT" :{
                return [...state,action.payload]
            }
            case "GETTANENT":{
                return [...action.payload]
            }
            case "DELETETANENT":{
                return state.filter((ele)=>{
                    return ele._id!==action.payload._id
                })
            }
            default:{
                return [...state]
            }
        }
}
export default tanentreducer