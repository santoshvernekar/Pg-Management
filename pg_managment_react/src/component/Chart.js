import React from "react";
import { Appchart } from "./Piechart";
import { useSelector } from "react-redux";


const Chart =(props)=>{
   let data=[["Total capacity","Total Tenet"]], totalcapacity=0
    const roomdetails=useSelector((state)=>{
          return state.roomDetails
    })
    const tanentdetails=useSelector((state)=>{
        return state.tanentDetails
    })
    
    roomdetails.forEach((ele)=>{
       totalcapacity+=ele.capacity
    })
    let tanent=["Total Capacity"].concat(totalcapacity)
    let capacity=["Tanenet"].concat(tanentdetails.length)
    data.push(tanent)
    data.push(capacity)
    console.log(data)
    return(
        <Appchart data={data}/>
    )
}
export default Chart