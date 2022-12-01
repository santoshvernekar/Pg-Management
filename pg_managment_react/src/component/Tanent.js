import {React,useEffect} from "react";
import Tanentform from "./Tanentform";
import Tanentlist from "./Tanenetlist";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tanentgetaction } from "../redux/actiongenerator/tanentaction";

const Tanent=(props)=>{

    const token=useSelector((state)=>{
        return state.loginreducer.token.split(" ")[1]
    })
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(tanentgetaction(token))
    },[])
 
    return(
        <div >
           
            <Tanentform/>
            <Tanentlist/>
        </div>
      
    )
}
export default Tanent