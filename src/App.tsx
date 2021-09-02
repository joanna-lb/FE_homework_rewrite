import * as React from "react";

import './index.scss'

import {useEffect, useState} from "react";
import {NewAgentType} from "./type";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {


  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  );

}

export default App
