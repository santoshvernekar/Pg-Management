import React, { useState } from "react";
import Detailspage from "./Detailspage";
import Mainpage from "./Mainpage";
import { useSelector } from "react-redux";

const Base=(props)=>{
    const [togal,setTogal]=useState(false)


   const value=useSelector((state)=>{
     return state.loginreducer
   })
   
  
   return( 
    <div >
         {value.hasOwnProperty("token")  ?<Detailspage />:<Mainpage />}
    </div>
   )
}
export default Base