"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

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
      <div className="flex justify-around items-center w-84 text-lg">
      <Link href={"#home"}> <h1 className="ms-3 text-green-500 text-xl font-bold cursor-pointer" >Home</h1></Link>  
        <Link href={"#about"}> <h1 className="ms-3 text-green-500 text-xl font-bold cursor-pointer" >About</h1></Link>  
      <Link href={"#service"}> <h1 className="ms-3 text-green-500 text-xl font-bold cursor-pointer" >Services</h1></Link>  
      <Link href={"#contact"}> <h1 className="ms-3 text-green-500 text-xl font-bold cursor-pointer" >Contact</h1></Link>  

        {/* User Icon and Sign In/Sign Up toggle */}
        <div className="relative">
          <button className="ms-5" onClick={handleUserClick}>
            <i className="fa-solid fa-user text-green-500 cursor-pointer"></i>
          </button>

          {/* Show Sign In and Sign Up links if the state is true */}
          {isUserMenuVisible && (
            <div className="absolute right-0 bg-white shadow-lg p-3 mt-2 rounded-md w-24 z-3">
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
