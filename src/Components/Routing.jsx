import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Cart from './Cart';
import Homee from './Homee';
import Loginn from './Loginn';

const Routing = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/login" element={<Loginn/>} />
        <Route path='Cart' element={<Cart/>}/>
      </Routes>
         
    </div>
  )
}

export default Routing