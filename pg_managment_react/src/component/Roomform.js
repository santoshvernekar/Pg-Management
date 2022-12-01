import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { roomaddaction } from "../redux/actiongenerator/roomaction";
import "../css/room.css"
const Roomform=(props)=>{
   const [roomnumber ,setRoomnumber]=useState(0)
   const [buildingId,setBuildingId]=useState("")
   const [tanentCapacity ,setTanentcapacity]=useState(0)
   const [ buildingname,setBuildingname]=useState("")
      
   const dispatch=useDispatch()

    const token=useSelector((state)=>{
        return state.loginreducer.token.split(" ")[1]
    })

   const buildingdata=useSelector((state)=>{
        return state.buildingDetails
   })
   const id=useSelector((state)=>{
       return state.userregister[0]._id
   })
    const handlechnageroom=(e)=>{
      setRoomnumber(e.target.value)
    }
    const handleselect=(e)=>{
      setBuildingId(e.target.value)
    }
    const handlechnagtanent=(e)=>{
       setTanentcapacity(e.target.value)
    }
    const handlebuildingname=(e)=>{
        setBuildingname(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
       const formdata={
        room_No:roomnumber,
        capacity:tanentCapacity,
        ownerId: id ,
        buildingId:buildingId,
        buildingname: buildingname  
       }
       console.log(formdata)
       dispatch(roomaddaction(formdata,token))
       
       setRoomnumber("")
       setBuildingId("")
       setTanentcapacity("")
       setBuildingname("")
    }
    return(
        <div class="buildingform1">
            <form onSubmit={handlesubmit}>
                <label>Building</label><br/>
                <select value={buildingId} onChange={handleselect}>
                    <option>select</option>
                    {buildingdata.map((ele)=>{
                       return(
                        <option value={ele._id}>Building-Name{ele.buildingname} totalroom-{ele.totalroom}</option>
                       )
                    })}
                </select><br/>
                <label>Room Number</label><br/>
                <input type="number"  
                 value={roomnumber}   
                 onChange={handlechnageroom}  
                 placeholder="room number"/><br/>
                 
                 <label>Tanent capacity</label><br/>
                <input type="number"  
                value={tanentCapacity}  
                 onChange={handlechnagtanent}  
                  placeholder="Tanent capacity"/><br/>

                 <label>Building Room</label><br/>
                <select value={ buildingname} onChange={handlebuildingname}>
                    <option>select</option>
                    {buildingdata.map((ele)=>{
                       return(
                        <option value={ele.buildingname}>Building-Name{ele.buildingname} totalroom-{ele.totalroom}</option>
                       )
                    })}
                </select>
                <button  class="sub"  type="submit">save</button>
            </form>
        </div>
    )
}
export default Roomform