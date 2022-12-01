import React from "react";
import { useFormik } from "formik";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { tanentschema } from "../form/registrationscema";
import { registeraction } from "../redux/actiongenerator/useraction";
import { tanentPostaction } from "../redux/actiongenerator/tanentaction";

import "../css/tanent.css"


const initialValues = {
  name:"",
  phonenumber:"",
  adharenumber:"",
  adress:"",
  buildingId:"",
  roomId:""
};

const Tanentform = (props) => {

   
  const owner=useSelector((state)=>{
      return state.userregister[0]._id
  })
  const dispatch=useDispatch()

  const token=useSelector((state)=>{
    return state.loginreducer.token.split(" ")[1]
  })
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues:initialValues,
      validationSchema: tanentschema,
      onSubmit: (values, action) => {
        values.ownerId=owner
        console.log(values)
       dispatch(tanentPostaction(values,token))
        action.resetForm();
      },
    })
    console.log(errors)
  
    const buildingData=useSelector((state)=>{
          return state.buildingDetails
    })

    const roomData=useSelector((state)=>{
         return state.roomDetails
    })
      console.log(roomData,"rromdata")
  return (
    <div class="tanetform">

        <form onSubmit={handleSubmit}>
        <div className="input-block">
            <label htmlFor="name" className="input-label">
              Name
            </label><br/>
            <input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name? <p1>{errors.name}</p1>:null}
        
          </div>
          <div className="input-block">
            <label htmlFor="phonenumber" className="input-label">
            phonenumber
            </label><br/>
            <input
              type="phonenumber"
              autoComplete="off"
              name="phonenumber"
              id="phonenumber"
              placeholder="phonenumber"
              value={values.phonenumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phonenumber && touched.phonenumber? <p1>{errors.phonenumber}</p1>:null}
        
          </div>
          <div className="input-block">
            <label htmlFor="adharenumber" className="input-label">
              Adharnumber
            </label><br/>
            <input
              type="adharenumber"
              autoComplete="off"
              name="adharenumber"
              id="adharenumber"
              placeholder="adharenumber"
              value={values.adharenumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.adharenumber && touched.adharenumber? <p1>{errors.adharenumber}</p1>:null}
          </div>
          <div className="input-block">
            <label htmlFor="adress" className="input-label">
              Email
            </label><br/>
            <input
              type="adress"
              autoComplete="off"
              name="adress"
              id="adress"
              placeholder="adress"
              value={values.adress}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.adress&&touched.adress  ? <p1>{errors.adress}</p1>:null}
          </div>
{/* 
          <div className="input-block">
            <label htmlFor="ownername" className="input-label">
              ownername
            </label>
            <input
              type="ownername"
              autoComplete="off"
              name="ownername"
              id="ownername"
              placeholder="ownername"
              value={owner._id}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.ownerId&&touched.ownerId  ? <p1>{errors.ownerId}</p1>:null}
          </div> */}

          <div className="input-block">
            <label htmlFor="buildingId" className="input-label">
              Buildingname
            </label><br/>
             <select  type="buildingId" 
               autoComplete="off" name="buildingId" 
                id="buildingId" placeholder="buildingId"    
                value={values.buildingId}  onChange={handleChange} onBlur={handleBlur} >

                  <option>select</option>
                  {buildingData.map((ele)=>{
                   return( <option value={ele._id}>{ele.buildingname}</option>
                   )
                  })}
             </select>
            {errors.buildingId && touched.buildingId ? <p1>{errors.buildingId}</p1>:null}
          </div>

          <div className="input-block">
            <label htmlFor="roomId" className="input-label">
              Roomnumber
            </label><br/>
             <select  type="roomId" 
               autoComplete="off" name="roomId" 
                id="roomId" placeholder="roomId"    
                value={values.roomId}  onChange={handleChange} onBlur={handleBlur} >

                  <option>select</option>
                  {roomData.map((ele)=>{
                   return( <option value={ele._id}>{ele.room_No}</option>
                   )
                  })}
             </select>
            {errors.roomId && touched.roomId ? <p1>{errors.roomId}</p1>:null}
          </div>

        

          <div className="modal-buttons">
            <button className="input-button"   class="sub" type="submit">
              save
            </button>
          </div>
        </form>
               
    </div>
  )

}
export default Tanentform