"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const router=useRouter();
  // Toggle the visibility of the sign-in/sign-up text
  const handleUserClick = () => {
    setIsUserMenuVisible(prevState => !prevState);
  };

  return (
    <div className="flex items-center bg-stone-200  justify-around p-5 m-1">
      {/* Left section with logo */}
      <div className="Navbar-left w-24">
        <h1 className="text-lg text-green-500 text-xl font-bold cursor-pointer">
          Truck <i className="fa-solid fa-car"></i>
        </h1>
      </div>

      {/* Navigation links */}
      <div className="flex items-center w-84 text-lg">
      <h1 className="ms-3 me-5 text-green-500 text-xl font-bold cursor-pointer" onClick={()=>router.push('Home')} >Home</h1> 
       

        {/* User Icon and Sign In/Sign Up toggle */}
        <div className="relative">
          <button className="ms-5 ps-5" onClick={handleUserClick}>
            <i className="fa-solid fa-user text-green-500 cursor-pointer"></i>
          </button>

          {/* Show Sign In and Sign Up links if the state is true */}
          {isUserMenuVisible && (
            <div className="absolute right-0 bg-white shadow-lg p-3 mt-2 rounded-md w-24 z-2">
              <h1 className="text-lg text-black cursor-pointer mb-2 font-serif">Sign in</h1>
              <h1 className="text-lg text-black cursor-pointer font-serif" >Sign up</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
