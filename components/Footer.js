import React from 'react'

const Footer = ({ bgColor, textColor }) => {
  return (
    <footer className={`bg-[${bgColor}] text-[${textColor}] px-12 w-full shadow-md`}>
        <div className='footer py-6 flex flex-col justify-center items-center'>
            <p className='text-sm'></p>
            <p className='text-sm'> &copy; 2022 Mukul Raj</p>
        </div>
    </footer>
  )
}

export default Footer