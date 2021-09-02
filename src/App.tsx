import * as React from "react";

import './index.scss'

import {useEffect, useState} from "react";
import {NewAgentType} from "./type";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {


  return (
    <div>

      <Header/>
      <BrowserRouter>
        <Route  component={Menu}/>
      </BrowserRouter>
      {/*<Menu/>*/}
      <Footer/>

    </div>
  );

}

export default App
