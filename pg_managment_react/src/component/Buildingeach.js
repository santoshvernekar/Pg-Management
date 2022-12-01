import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buildingdelete } from "../redux/actiongenerator/buildingaction";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Buildingeach=(props)=>{
   const [building,setBuilding]=useState([])
     
   const dispatch=useDispatch()

   const token=useSelector((state)=>{
    return state.loginreducer.token.split(" ")[1]
  })

   const buildingdata=useSelector((state)=>{
         return state.buildingDetails
   })

   useEffect(()=>{
       setBuilding(buildingdata)
 
  },[buildingdata])
   
  const handledelete=(id)=>{
     dispatch(buildingdelete(id,token))
  }
    return(
        <div>
            <h1>Total building {building.length}</h1>
            <table class="table1">
                 <thead >
                      <tr>
                        <th>Sl.No</th>
                        <th>Building Name</th>
                        <th>Adress</th>
                        <th>Total Room</th>
                      </tr>
                        {building.map((ele,i)=>{
                            return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{ele.buildingname}</td>
                                    <td>{ele.adress}</td>
                                    <td>{ele.totalroom}</td>
                                    <button class="red" onClick={()=>{handledelete(ele._id)}}>Delete</button>
                                </tr>
                            )
                        })}
                      
                 </thead>
            </table>
           
        </div>
    )
}
export default Buildingeach