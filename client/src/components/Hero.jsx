import React from 'react'
import { MainButton } from './MainButton';

export const Hero = () => {
  return (
    <div className="relative bg-[url('./assets/images/main.jpg')] bg-cover bg-center min-h-screen w-full"
    style={{ minHeight: 'calc(100vh - 80px)'}}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative main md:w-2/3 mx-auto">
        <h2 className="text-6xl md:text-8xl text-white text-center font-bebas tracking-wide pt-12 md:pt-28">
          Plan Smarter <span className="text-[#00FF00]">Achieve More</span>
        </h2>
        <p className="text-white font-montserrat text-2xl w-3/4 md:w-full font-semibold md:font-normal mx-auto pt-4 md:text-3xl text-center tracking-wider">
          Unlock your full potential with personalized fitness plans powered by
          advanced AI technology. Stay on track, push your limits.
        </p>
        <div className="start-btn mx-auto w-fit pt-12 ">
          <MainButton content={"Get your plan"} padding="14px 48px" />
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}
