import {React,useState,useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { accountaction } from "../redux/actiongenerator/useraction";

const Myprofile=(props)=>{
    const [account,setAccount]=useState({})
    const dispatch=useDispatch()
     const token=useSelector((state)=>{
          return state.loginreducer.token.split(" ")[1]
     })

     console.log(token)
     useEffect(()=>{
        axios.get(`http://localhost:3050/users/account`,{headers:{Authorization :`Bearer ${token}`}})
        .then((account)=>{
            setAccount(account.data)
            dispatch(accountaction(account.data))
            
        },[])
        .catch((e)=>{
            console.log(e)
        })
     },[])
   
      console.log(account,"ac")
    return(
        <div>
            <h2>{account.name}</h2>
            <h3>{account.phonenumber}</h3>
            <h3>{account.email}</h3>
        </div> 
    )
}
export default Myprofile