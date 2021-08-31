import React from "react";
import { BrowserRouter } from "react-router-dom";
import  NavBar  from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
      </BrowserRouter>
      <ItemListContainer />
    </div>
  );
};

export default App;
