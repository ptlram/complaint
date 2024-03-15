import React, { useState } from "react";
import "../css/login.css"
import {NavLink} from "react-router-dom";

import Lognavbar from "./Lognavbar";
const Login = () => {


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword,setconfirmpassword]= useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { name, email, username, password ,confirmpassword }
            const response = await fetch("http://localhost:5000/api/citizen", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response.data);
            alert("create sucessfully")
        }
        catch (err) {
            console.log(err)

            alert("successfullt register")
        }
    }




    return (<>
    <Lognavbar/>
    <div className="bod">
    <div className="main" >
        <input className="input" type="checkbox" id="csk" aria-hidden="true" />    
        <div className="signup">

            <form onSubmit={handleSubmit}>
            <label for="csk" aria-hidden="true">signup</label>
                <input className="input" 
                    type="textbox"
                    name="name"
                    placeholder="enter your name"   
                    value={name}
                    onChange={e => { setname(e.target.value) }}
                />
                <input className="input"
                    type="email"
                    name="email"    
                    placeholder="Email"
                    value={email}
                    onChange={e => { setemail(e.target.value) }}
                />
                <input className="input" 
                    type="textbox"
                    name="username"
                    placeholder="Choose a username" 
                    value={username}
                    onChange={e => { setusername(e.target.value) }}
                />
                <input className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => { setpassword(e.target.value) }}
                />
                <input className="input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmpassword}
                    onChange={e => { setconfirmpassword(e.target.value) }}
                />
                <input type="submit" className="button" />
            </form>
        </div>
       

        <div className="signin">
            <form>
            <label for="csk" aria-hidden="true">login</label>
                <input className="input"
                    type="textbox"
                    name="username"
                    placeholder="Choose a username"
                />
                <input className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <input className="input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                />
                
                    <nav>
                        <NavLink to="/Home">
                            <button className="button">login</button>
                        </NavLink>
                    </nav>
                    
            </form>
        </div>
    </div>
    </div>
    </>
)}

export default Login;