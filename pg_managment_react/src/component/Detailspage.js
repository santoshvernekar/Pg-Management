import {React, useEffect} from "react";

import { Link,Route } from "react-router-dom";
import Myprofilebase from "./Myprofilebase";
import Building from "./Building";
import Room from "./Room";
import Tanent from "./Tanent";
import { useDispatch } from "react-redux";
import { deletetoken } from "../redux/actiongenerator/useraction";
import { useSelector } from "react-redux";
import { accountactiondetails } from "../redux/actiongenerator/useraction";
import "../css/header.css"

const Detailspage=(props)=>{
    const dispatch=useDispatch()

    const token=useSelector((state)=>{
      return state.loginreducer.token.split(" ")[1]
   })
    useEffect(()=>{
      dispatch(accountactiondetails(token))
    },[])
 return(
   
    <div>
       <div >
         <header class="header">
             <nav>
             
              <h3 class="headercontaint"><Link to="/buildings" class="headercontaint">buildings</Link></h3>
              <h3 class="headercontaint"><Link to="/Room" class="headercontaint" >Room</Link> </h3>
              <h3  class="headercontaint"><Link to="/Tanentdetails" class="headercontaint" >Tanent Details</Link></h3>
              <h3 class="headercontaint"><Link onClick={()=>{
                    dispatch(deletetoken())
                }} class="headercontaint" >Logout</Link> </h3>
             </nav>
         </header>
            
       </div>
      
      
        <Route path="/Myprofile"  component={Myprofilebase}/>
        <Route path="/buildings" component={Building}/>
        <Route path="/Room" component={Room}/>
        <Route path="/Tanentdetails" component={Tanent}/>

    </div>
 )
}
export default Detailspage