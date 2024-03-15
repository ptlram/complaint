import React from 'react';
import {Route,Routes} from "react-router-dom";

import Login from './user/Login';
import Home from './user/Home';
import Complaint from './user/Complaint';
import Services from './user/Services';
import About from "./user/About"
import Contact from "./user/Contact"
import Userprofile from "./user/Userprofile";
function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/complaint" element={<Complaint/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={<Userprofile/>}/>
          </Routes>

      </>
  );
}

export default App;
