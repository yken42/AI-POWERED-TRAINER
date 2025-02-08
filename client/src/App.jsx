import React, { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InfoCard } from './components/InfoCard'
import { CardsPanel } from './components/CardsPanel'
function App() {

  return (
    <>
       <Navbar />
      <Hero /> 
      {/* <CardsPanel />   */}

    </>
  )
}

export default App
