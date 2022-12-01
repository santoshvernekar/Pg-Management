import React from "react";
import { Link,Route } from "react-router-dom";
import Login from "../form/Login";
import Registration from "../form/Rgisterfoemik";
import "../css/header.css"
import Home from "./Home";

const Mainpage=(props)=>{
    const {handletogal}=props
    return(
        <>  
        <div>
        <header class="header" >
            <nav>
                <h2 class="headercontaint"><Link to="/" class="headercontaint" >Home</Link></h2>
                <h2 class="headercontaint"><Link to="/Registration" class="headercontaint">Registration</Link></h2>
                <h2 class="headercontaint"><Link to="/Login" class="headercontaint">Login</Link></h2>  
            </nav>
        </header>    
    </div>
    <div class="main">
            <Route path="/" component={Home} exact={true}/>
            <Route path="/Registration" component={Registration}/>
            <Route path="/Login" render={(props)=>{
                return <Login {...props}  />
            }}/>
    </div>
  </>
        
    )
}
export default Mainpage