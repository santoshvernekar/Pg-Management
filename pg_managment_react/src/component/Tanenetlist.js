import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tanentdeleteaction } from "../redux/actiongenerator/tanentaction";
import swal from 'sweetalert';
import Chart from "./Chart";
import "../css/tanent.css"


const Tanentlist=(props)=>{
    
   const [tanent,setTanent]=useState([])

    const dispatch=useDispatch()

    const tanentDetails=useSelector((state)=>{
          return state.tanentDetails
    })
    const roomdetails=useSelector((state)=>{
        return state.roomDetails
    })
       
    const token=useSelector((state)=>{
        return state.loginreducer.token.split(" ")[1]
     })
     useEffect(()=>{
       setTanent(tanentDetails)
     },[tanentDetails])

    const handleshow=(id)=>{
       
        const data=roomdetails.filter((ele)=>{
            return ele._id===id
        })
      //console.log(data[0].buildingname)
       
        swal(`Building Name-${data[0].buildingname} and Room Number -${data[0].room_No}`)
    }
    const handledelete=(id)=>{
         dispatch(tanentdeleteaction(id,token))
    }
    return(
        <div class="tanent">
            <h3>total tanent {tanentDetails.length}</h3>
            <div>
            <table class="table3">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Adhar number</th>
                        <th>Adress</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {tanent.map((ele,i)=>{
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.phonenumber}</td>
                                    <td>{ele.adharenumber}</td>
                                    <td>{ele.adress}</td>
                                    <button class="green" onClick={()=>{handleshow(ele.roomId)}}>Show Details</button ><button class="red" onClick={()=>{handledelete(ele._id)}}>Delete</button>
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
            </div>
           
            <div class="chart">
                   <Chart/> 
            </div>
        </div>
    )
}
export default Tanentlist