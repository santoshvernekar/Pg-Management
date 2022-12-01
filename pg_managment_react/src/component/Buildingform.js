import { React,useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buildingaddaction } from "../redux/actiongenerator/buildingaction";
import "../css/buildings.css"

const Buildingfrom=(props)=>{
  const {id}=props
   const [buildingname ,setBuildingname]=useState("")
   const [adress,setAdess]=useState("")
   const [totalroom,setTotalroom]=useState(0)

   const dispatch=useDispatch()
   
  
   const token=useSelector((state)=>{
      return state.loginreducer.token.split(" ")[1]
   })
   console.log(token)
   
   const handlechange=(e)=>{
     setBuildingname(e.target.value)
   }
   const handlechangeadress=(e)=>{
        setAdess(e.target.value)
   }
   const handlechangeroom=(e)=>{
     setTotalroom(e.target.value)
   }
   const handlesubmit=(e)=>{
     e.preventDefault()
      const formdata={
        buildingname:buildingname,
        totalroom:totalroom,
        adress:adress,
        ownerId:id
      }
      setBuildingname("")
      setTotalroom("")
      setAdess("")
      console.log(formdata,"formdata")
      dispatch(buildingaddaction(formdata,token))
   }
    return(
        <div class="buildingform">
            <form onSubmit={handlesubmit}>
                <label>BuildingName</label><br/>
                <input type="string" value={buildingname} onChange={handlechange} placeholder="BuildingName"/><br/>
                <label>Adress</label><br/>
                <input type="string" value={adress} onChange={handlechangeadress} placeholder="Adress"/><br/>
                <label>Total Room</label><br/>
                <input type="number" value={totalroom} onChange={handlechangeroom} placeholder="Total number" /><br/>
                <button class="sub" type="submit">save</button>
            </form>
        </div>
    )
}
export default Buildingfrom