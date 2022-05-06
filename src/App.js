import React from "react";
import Router from "./Components/Router";
import Navb from "./Components/Navb";
import "./style.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navb />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
