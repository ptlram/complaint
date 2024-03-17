import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./user/Login";
import Home from "./user/Home";
import Complaint from "./user/Complaint";
import Services from "./user/Services";
import About from "./user/About";
import Contact from "./user/Contact";
import Complaintdetails from "./user/complaintdetails";
import Userprofile from "./user/Userprofile";
import { useState, useEffect } from "react";
import { Admin } from "./admin/admin";

function App() {
  const [users, setusers] = useState([]);

  const getdata = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/citizen");
      const jsonData = await response.json();
      // console.log(jsonData)
      setusers(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const [complaint, setcomplaint] = useState([]);

  const getcomlaint = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/complaint");
      const jsonData = await response.json();
      // console.log(jsonData)
      setcomplaint(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcomlaint();
  }, []);

  const [detail, setdetail] = useState([]);

  const getdetail = async () => {
    try {
      // Retrieve email from local storage
      const userEmail = JSON.parse(localStorage.getItem("users")).email;

      // Make fetch request to API endpoint with the email parameter
      const response = await fetch(
        `http://localhost:5000/api/complaints/${userEmail}`
      );
      const jasondatas = await response.json();
      console.log(jasondatas);
      setdetail(jasondatas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdetail();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/complaint"
          element={<Complaint users={users} complaint={complaint} />}
        />
        <Route
          path="/complaintdetails"
          element={<Complaintdetails detail={detail} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
