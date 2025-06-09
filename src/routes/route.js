import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/homepage/about/index";
import About from "../components/homepage/about/index";
import Contact from "../components/homepage/contact/index";

function Route(){
  return(
    <Router>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </Router>
  )
}

export default Route;