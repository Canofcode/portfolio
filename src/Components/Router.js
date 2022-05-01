import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<Homepage />}></Route>

      <Route exact path="/about" element={<About />}></Route>

      <Route exact path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default Router;
