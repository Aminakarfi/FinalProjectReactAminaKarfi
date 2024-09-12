import React from "react";

import { Routes } from "react-router";
import Header from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { About } from "./pages/About";


function App() {
  return (
    <>
      <Header/>
        <Routes />
<About/>
      <Footer/>

      </>
      );
}

      export default App;