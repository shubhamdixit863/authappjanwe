import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Signup from "./components/Signup";
import Home from './components/Home';
function App() {


  return (
    <div className="App">
       <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/home" element={<Home />}/>
      
  
    </Routes>
      
    </div>
  )
}

export default App
