import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Components/allroutes";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
