import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { roomgetaction } from "../redux/actiongenerator/roomaction";
import Roomeach from "./Roomeach";

const Roomlist=(props)=>{
   
    const dispatch=useDispatch()

    const token=useSelector((state)=>{
        return state.loginreducer.token.split(" ")[1]
    })
  useEffect(()=>{
    dispatch(roomgetaction(token))
  },[])
   
    return(
    <div>
        <Roomeach/>
    </div>
    )
}
export default Roomlist