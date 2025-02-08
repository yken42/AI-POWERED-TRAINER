import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InfoCard } from './components/InfoCard'
import { CardsPanel } from './components/CardsPanel'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/info' element={<CardsPanel />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
