import React from 'react'
import { MainButton } from './MainButton'

export const Navbar = () => {
  return (
    <div className='h-20 bg-[#1A1A1A]'>
        <nav className='w-4/5 min-h-full flex justify-between items-center mx-auto'>
            <h1 className="text-3xl mx-auto md:mx-0 font-anton font-semibold text-[#32CD32]">PulsePlan</h1>
            <div className='links hidden md:block text-sm font-montserrat font-light text-white'>
                <a href="" className='mr-4'>Sign in</a>
                <MainButton content="Get started" padding="14px" />
            </div>
        </nav>
    </div>
  )
}
