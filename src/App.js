import React from "react";
import  NavBar  from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
      </BrowserRouter>
      
    </div>
  );
};

export default App;
