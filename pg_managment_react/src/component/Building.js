import {React,useEffect, useState} from "react";
import Buildingfrom from "./Buildingform";
import Buildinglist from "./Buildinglist";
import { useSelector,useDispatch } from "react-redux";
import { accountaction } from "../redux/actiongenerator/useraction";
//import { useEffect } from "react";
import axios from "axios";



const Building=(props)=>{
    const [id,setId]=useState("")
     
    const dispatch=useDispatch()

    const token=useSelector((state)=>{
        return state.loginreducer.token.split(" ")[1]
   })
   

    useEffect(()=>{

        axios.get(`http://localhost:3050/users/account`,{headers:{Authorization :`Bearer ${token}`}})
        .then((account)=>{
            // setAccount(account.data)
            dispatch(accountaction(account.data))
            setId(account.data._id)
        })
        .catch((e)=>{
            console.log(e)
        })
        
    },[])
      
         

   return(
    <div>
         <Buildingfrom id={id}/>
         <Buildinglist/>
    
    </div>
   )
}
export default Building