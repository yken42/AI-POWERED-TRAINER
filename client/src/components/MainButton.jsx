import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MainButton = ({ content, padding, onClick }) => {
  const navigate = useNavigate()
  return (
    <a
      onClick={onClick}
      style={{ padding: padding }}
      className='bg-[#32CD32] rounded-3xl text-white hover:bg-[#3d8f3d] hover:transition hover:cursor-pointer'>
      {content}
    </a>
  );
}
