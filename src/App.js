import React from "react";
import "./style.css";
import {useState}  from 'react';
import Display from "./components/display";
import Header from "./components/header";
import Button from "./components/buttons"


export default function App() {
  
  return(
    <div className= "container">
      <header><Header/></header>
      <div claassName ="calculator">
        <Button/>
      </div>
    </div>
  )


}
