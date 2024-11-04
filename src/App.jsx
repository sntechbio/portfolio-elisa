import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "./home"
import Pack from "./pack";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Pack1" element={<Pack packSelected={1}/>} />
        <Route path="/Pack2" element={<Pack packSelected={2}/>} />
        <Route path="/Pack3" element={<Pack packSelected={3}/>} />
      </Routes>
    </div>
  )
}

export default App
