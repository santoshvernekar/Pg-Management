import axios from "axios";
import { useSelector } from "react-redux";

const addacount=()=>{
    let account
    const token=useSelector((state)=>{
        return state.loginreducer[0].token.split(" ")[1]
       })
       axios.get(`http://localhost:3050/users/account`,{headers:{Authorization :`Bearer ${token}`}})
         .then((res)=>{
           account=res.data
         })
         .catch((e)=>{
            console.log(e)
         })
}
export default addacount