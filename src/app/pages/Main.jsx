"use client"
import { useState, useEffect } from 'react';

const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images=["truck1.jpg","truck2.jpg"]
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPrevious = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    useEffect(() => {
      const interval = setInterval(goToNext, 5000); 
      return () => clearInterval(interval); 
    }, []);
  
    return (
      <div className="relative w-full   overflow-hidden " id='home'>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-130  rounded-lg"
        />
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4  transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          &#10095;
        </button>
      </div>
    );
  };
export default Main