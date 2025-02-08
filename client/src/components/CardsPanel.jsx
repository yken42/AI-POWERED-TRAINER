import React from 'react'
import { InfoCard } from './InfoCard';
import { useNavigate } from 'react-router-dom';

export const CardsPanel = () => {
  const backString = '< back'
  const navigate = useNavigate()
  return (
    <div className="relative bg-[url('./assets/images/main.jpg')] bg-cover bg-center min-h-screen w-full">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 mx-auto">
          <InfoCard />
        </div>
      <button onClick={() => navigate('/')} className="absolute top-80 left-40 text-white text-sm font-montserrat font-semibold">{backString}</button>
    </div>
  )
}
