import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>

        <Route exact path="/about" element={<About />}></Route>

        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
