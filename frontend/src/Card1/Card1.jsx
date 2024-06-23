// import React from 'react'
// import { useState,useEffect} from 'react';
// import { motion } from 'framer-motion';
// import './Card1.css'
// const images = ['/a8.jpg', '/a6.jpg'];

// const Card1 = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000); // Change image every 3 seconds
//         return () => clearInterval(interval);
//     }, []);

//   return (
//     <div className="parent container">
//     <motion.img
//             key={currentImageIndex}
//             src={images[currentImageIndex]}
//             alt="not found"
//             className="background-image"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//         />
//         <div className="cardA absolute top-0">
//     <div className="logo ">
//         <span className="circle circle1"></span>
//         <span className="circle circle2"></span>
//         <span className="circle circle3"></span>
//         <span className="circle circle4"></span>
//         <span className="circle circle5 text-black ">
//             {/* AMXSOL */}
//         </span>

//     </div>
//     <div className="glass"></div>
//     <div className="contentA">
//         <span className="title">WHAT WE CAN DO FOR YOU</span>
//             <p>AMXSOL provides cost-effective software solutions and consulting services.</p>
//             <span className="text"></span>
//     </div>
//     <div className="bottom">

//         <div className="social-buttons-container grid lg:grid-cols-2 sm:grid-cols-1 space-y-5">
//             <div><button className="social-button .social-button1">
//             <a href='#'> BUSINESS SOLUTIONS </a>
//                 </button></div>
//               <div><button className="social-button .social-button2">
//               <a href='#'> TALENT SOLUTIONS</a>
//               </button></div>

//         </div>

//     </div>
//     </div>
// </div>
//   )
// }

// export default Card1

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Card1.css";

const images = ["/a8.jpg", "/a6.jpg"];

const Card1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    setIsScrolling(true);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const scrollPosition = touch.clientY;
    if (scrollPosition > window.innerHeight / 2) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className="main-section flex flex-col">
      <div
        className="parent container background-image"
        onScroll={handleScroll}
        onTouchMove={handleTouchMove}
      >
        {/* <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="not found"
        className="background-image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      /> */}
        {/* <div className="cardA absolute top-0">
      <div className="logo ">
         <span className="circle circle1"></span>
         <span className="circle circle2"></span>
         <span className="circle circle3"></span>
         <span className="circle circle4"></span>
         <span className="circle circle5 text-black ">
            
         </span>

     </div>
    <div className="glass"></div>
     <div className="contentA">
         <span className="title">WHAT WE CAN DO FOR YOU</span>
             <p>AMXSOL provides cost-effective software solutions and consulting services.</p>
             <span className="text"></span>
     </div>
     <div className="bottom">
        
         <div className="social-buttons-container grid lg:grid-cols-2 sm:grid-cols-1 space-y-5">
             <div><button className="social-button .social-button1">
             <a href='#'> BUSINESS SOLUTIONS </a>
                 </button></div>
               <div><button className="social-button .social-button2">
               <a href='#'> TALENT SOLUTIONS</a>
               </button></div>
              
         </div>
        
     </div>
     
      </div> */}
        <div class="e-card playing">
          <div class="cube-container">
            <div class="cube">
              <div class="face front text-white">AMXSOL</div>
              <div class="face back text-white">AMXSOL</div>
              <div class="face right text-white">AMXSOL</div>
              <div class="face left text-white">AMXSOL</div>
              <div class="face top text-white">AMXSOL</div>
              <div class="face bottom text-white">AMXSOL</div>
            </div>
          </div>

          <div className="logo ">
            <span className="circle circle1"></span>
            <span className="circle circle2"></span>
            <span className="circle circle3"></span>
            <span className="circle circle4"></span>
            <span className="circle circle5 text-black ">{/* AMAXSOL */}</span>
          </div>
          <div class="image"></div>

          {/* <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div> */}

          <div className="bottom"></div>
        </div>

        <div class="infotop">
          <div class="name">
            <div className="contentA">
              <span className="title">WHAT WE CAN DO FOR YOU</span>
              <p className="text">
                AMXSOL provides cost-effective software solutions and consulting
                services.
              </p>
              <span className="text"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="buttonscard top-0  ">
        <div className="my-2">
          <button>
            <a href="##">BUSINESS SOLUTIONS</a>
          </button>
        </div>
        <div>
          <button>
            <a href="###">TALENT SOLUTIONS</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
