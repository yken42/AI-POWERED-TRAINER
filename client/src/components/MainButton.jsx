import React from 'react'

export const MainButton = ({ content, padding }) => {
  return (
    <a
      href=""
      style={{ padding: padding }}
      className='bg-[#32CD32] rounded-3xl text-white hover:bg-[#3d8f3d] hover:transition'>
      {content}
    </a>
  );
}
