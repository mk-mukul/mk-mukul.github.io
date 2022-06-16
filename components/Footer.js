import React from 'react'

const Footer = () => {
  return (
    <footer className={`bg-bgPrimary text-textPrimary px-12 w-full shadow-md`}>
        <div className='footer py-6 flex flex-col gap-2 justify-center items-center'>
            <p className='text-sm'>Developed by Mukul using <a href='https://nextjs.org/' target="_blank" rel="noopener noreferrer">Next.js</a> and <a href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer">Tailwind CSS</a></p>
            <p className='text-sm'> &copy; 2022 Mukul Raj</p>
        </div>
    </footer>
  )
}

export default Footer