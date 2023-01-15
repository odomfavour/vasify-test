// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Index";
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
