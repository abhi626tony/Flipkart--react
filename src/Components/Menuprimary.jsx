import React from 'react'
import Search from './Icons/Search'
import Login from './Loginn'
import { Routes, Route, Link } from "react-router-dom";
function Menuprimary() {
  return (
    <div>
     <div className="headerr h-16 justify-center space-x-4 gap-x-32 flex items-center text-white text-lg  bg-blue-500">
            
            <div className="flipkart w-16 ml-2  " >
            <Link to="/"> <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png ' alt='' ></img></Link>
                 <div className='text-xs flex'>Explore
                <span className='ml-1 text-yellow-400'>Plus</span>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' className='w-4 h-4 ml-1'></img>
                   </div>
           
            </div>
            <div><Search/></div>
                   <Link to="/login"> <button className='ml-3 bg-white text-blue-500 inline-block w-28 h-8'>Login</button></Link>
          <p className='text-white ml-1'>Besome a seller</p>
          <Link to="Cart"><p className='text-white ml-4'>Cart</p></Link>
          

          
         </div>





    </div>
  )
}

export default Menuprimary