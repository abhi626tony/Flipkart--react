
import {useState} from 'react';

export default function Loginn() {
 
  return (
    <div>
    
        <div>
           <form className='bg-none'>
           <div class="flex items-center min-h-screen xl:justify-center ">
      <div
        class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 xl:max-w-screen-sm">
        <div
          class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">

          <div class=" my-3 text-2xl font-semibold tracking-wider text-left">
            <a href="#">Login</a>
          </div>
          <p class="mt-6 font-normal text-center text-white-300 md:mt-0">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-sm font-semibold text-gray-700"></h3>
          <form action="#" class="flex flex-col space-y-5">
            <div class="flex items-center border-b border-teal-500 py-0">
              <label for="email" class="text-sm font-semibold text-gray-500"></label>
              <input
                type="text" placeholder="Enter Email/Mobile number"
                id="email"
                autofocus
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
            </div>

            <div class="flex items-center border-b border-teal-500 py-0">
              <div class="flex items-center border-b border-teal-500 py-0">
                <label for="password" class="text-sm font-semibold text-gray-500"></label>
               </div>

              <input
                type="text" placeholder="Enter Password"
                id="password"
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
              <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot?</a>
             </div>

                  <p class="mt-6 text-xs text-left text-gray-400">
            <a>By continuing,you agree to flipkart's Terms of Use and privacy Policy</a>
            </p>
            
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-orange-500 focus:outline-none">
                Log in
              </button>
            </div>

            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                
              <span class="font-normal text-gray-500">OR</span>
                
              </span>
              <div class="flex flex-col space-y-4">
             
              <button
                type="submit"
                class="w-full px-4 py-2 text-xs font-semibold text-blue-400 transition-colors duration-300 bg-white-500 focus:outline-none shadow-md"
              >
                Request OTP
              </button>
            
                
    
            <p class="flex flex-col items-center font-semibold text-blue-600 justify-center text-xs mt-10 text-center">
            <span>New to Flipkart?</span>
            <a href="#" class="underline">Create an account</a>
          </p>

          
              </div>
            </div>
          </form>
        </div>
      </div>
    </div></form>
        </div>
      

      
    </div>
  );
}


