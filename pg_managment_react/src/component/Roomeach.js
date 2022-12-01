import {React ,useEffect, useState}from "react";
import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import { roomdeleteaction } from "../redux/actiongenerator/roomaction";

const Roomeach=(props)=>{
     const [room,setRoom]=useState([])

     const dispatch=useDispatch()

    const roomdata=useSelector((state)=>{
         return state.roomDetails
    })
    const token=useSelector((state)=>{
        return state.loginreducer.token.split(" ")[1]
    })

    useEffect(()=>{
      setRoom(roomdata)
    },[roomdata])

 const handledelete=(id)=>{
  dispatch(roomdeleteaction(id,token))
 }
   return(
    <div>
        <h2>Total room details {room.length}</h2>
         <table class="table2">
              <thead>
                     <tr>
                        <th>Buildingname</th>
                        <th>Room Number</th>
                        <th>Capacity</th>
                     </tr>
                  
              </thead>
              <tbody>
                     {room.map((ele)=>{
                        return (
                             <tr>
                                <td>{ele.buildingname}</td>
                                <td>{ele.room_No}</td>
                                <td>{ele.capacity}</td>
                                <button class="red" onClick={()=>{handledelete(ele._id)}}>Delete</button>
                             </tr>
                        )
                     })}
              </tbody>
         </table>
    </div>
   )
}
export default Roomeach