import {React}from "react";
import { useEffect } from "react";
import Buildingeach from "./Buildingeach";
import { useDispatch, useSelector } from "react-redux";
import { buildinggetaction } from "../redux/actiongenerator/buildingaction";



const Buildinglist=(props)=>{

   const dispatch=useDispatch()
      
    const token=useSelector((state)=>{
        return state.loginreducer.token.split(" ")[1]
   })
   useEffect(()=>{
    dispatch(buildinggetaction(token))
   },[])
  
    
    return(
        <Buildingeach/>
    )
}
export default Buildinglist