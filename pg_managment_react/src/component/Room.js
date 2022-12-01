import React from "react";
import Roomform from "./Roomform";
import Roomlist from "./Roomlist";
import { useDispatch } from "react-redux";

const Room=(props)=>{
    
  const dispatch=useDispatch()

  
 
    return (
        <div>
          <Roomform/>
          <Roomlist/>
        </div>
     
    )
}
export default Room