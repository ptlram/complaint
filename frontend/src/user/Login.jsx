import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

import Lognavbar from "./Lognavbar";
// import { Admin } from "../admin/admin";
const Login = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, username, password, confirmpassword };
      const response = await fetch("http://localhost:5000/api/citizen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response.data);
      alert("create sucessfully");
    } catch (err) {
      console.log(err);
      alert("error register");
    }
  };

  const history = useNavigate();
  // eslint-disable-next-line
  const [userdata, setUserData] = useState({});
  const loginhandle = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });
    const data = await response.json();
    localStorage.setItem("users", JSON.stringify(data));
    setUserData(data);

    // console.log(data);
    if (data) {
      if (data.username === "admin") {
        history("/admin");
      } else if (data.username === "customer");
      {
        history("/home");
      }
    } else {
      alert("email password is wrong");
    }
  };

  return (
    <>
      <Lognavbar />
      <div className="bod">
        <div className="main">
          <input
            className="input"
            type="checkbox"
            id="csk"
            aria-hidden="true"
          />
          <div className="signup">
            <form onSubmit={handleSubmit}>
              <label for="csk" aria-hidden="true">
                signup
              </label>
              <select
                // className="input"
                style={{
                  width: "60%",
                  height: "25px",
                  marginLeft: "80px ",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                }}
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                name="role"
              >
                <option value="" disabled selected>
                  select role
                </option>
                <option value="customer">customer</option>
                <option value="admin">admin</option>
                <option value="faculty">faculty</option>
              </select>
              <input
                className="input"
                type="textbox"
                placeholder="enter your name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />

              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                className="input"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmpassword}
                onChange={(e) => {
                  setconfirmpassword(e.target.value);
                }}
              />
              <input type="submit" className="button" />
            </form>
          </div>

          <div className="signin">
            <form>
              <label for="csk" aria-hidden="true">
                login
              </label>

              <select
                // className="input"
                style={{
                  width: "60%",
                  height: "25px",
                  marginLeft: "80px ",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                }}
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                name="role"
              >
                <option value="" disabled selected>
                  select role
                </option>
                <option value="customer">customer</option>
                <option value="admin">admin</option>
                <option value="faculty">faculty</option>
              </select>

              <input
                className="input"
                type="email"
                placeholder="enter email "
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                className="input"
                type="password"
                placeholder="Confirm password"
              />
              <button className="button" onClick={loginhandle}>
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
