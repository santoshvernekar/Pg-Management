import React from "react";
import { useFormik } from "formik";
//import { signUpSchema } from "./schemas";
import { registrationscema } from "./registrationscema";
import { registeraction } from "../redux/actiongenerator/useraction";
import { useDispatch } from 'react-redux'
import "../css/header.css"
const initialValues = {
  name:"",
  phonenumber:"",
  username:"",
  email:"",
  password:"",
  confirmpassword:"",
};

const Registration = (props) => {
  const dispatch=useDispatch()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registrationscema,
      onSubmit: (values, action) => {
        
        dispatch(registeraction(values))
        action.resetForm();
        props.history.push("/Login")
      },
    })
   console.log(errors)
    

  return (
    <div class="formpage">
          <div>

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
                              <label htmlFor="username" className="input-label">
                                username
                              </label><br/>
                              <input
                                type="username"
                                autoComplete="off"
                                name="username"
                                id="username"
                                placeholder="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {errors.username && touched.username? <p1>{errors.username}</p1>:null}

                            </div>
                            <div className="input-block">
                              <label htmlFor="email" className="input-label">
                                Email
                              </label><br/>
                              <input
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {errors.email&&touched.email  ? <p1>{errors.email}</p1>:null}
                            </div>
                            <div className="input-block">
                              <label htmlFor="password" className="input-label">
                                Password
                              </label><br/>
                              <input
                                type="password"
                                autoComplete="off"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {errors.password && touched.password ? <p1>{errors.password}</p1>:null}
                            </div>
                            <div className="input-block">
                              <label htmlFor="confirmpassword" className="input-label">
                                Confirm Password
                              </label><br/>
                              <input
                                type="confirmpassword"
                                autoComplete="off"
                                name="confirmpassword"
                                id="confirmpassword"
                                placeholder="ConfirmPassword"
                                value={values.confirmpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {errors.confirmpassword && touched.confirmpassword ? <p1>{errors.confirmpassword}</p1>:null}
                            </div>
                            <div className="modal-buttons">
                              <button className="input-button" type="submit">
                                Registration
                              </button>
                            </div>
                          </form>
                      
            </div>

    </div>
  ) 

}
export default Registration