import React  from "react";
import axios from "axios";
import {useFormik} from "formik"
import { loginscema } from "./registrationscema";
import { loginaction } from "../redux/actiongenerator/useraction";
import { useDispatch } from "react-redux";
import "../css/login.css"


const initialValues={
    email:"",
    password:""
}


const Login=(props)=>{
    //const {handletogal}=props
    const dispatch=useDispatch()

    axios.get()
    
 const {values,handleChange,handleBlur,handleSubmit,errors,touched} =useFormik({
     initialValues:initialValues,
     validationSchema:loginscema,
     onSubmit :(values,action)=>{
        dispatch(loginaction(values))
        action.resetForm()

    }
 })
 console.log(errors)

 
    return(
        <div class="login">
            <div>
            <form onSubmit={handleSubmit}  >
                <div>
                <div> 
                    <label>Email</label><br/>
                    <input type="text" 
                    name="email"
                    placeholder="Email"
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                 />
                 {errors.email&&touched.email ? <p>{errors.email}</p>:null}
                </div>
                 <div >
                    <label>Password</label><br/>
                    <input type="text"  
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  <p1>{errors.password}</p1>
                 </div>
                   <button type="submit">save</button>
                 </div>
        </form>
            </div>
          
        </div>
    )
    
}
export default Login