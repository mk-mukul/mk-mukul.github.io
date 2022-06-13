import Link from 'next/link'
import React from 'react'
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'


const Navbar = () => {
    return (<>
        <header className='px-12 w-full shadow-md absolute top-0'>
            <nav className='nav py-4 flex justify-between items-center'>
                <div>
                    <Link href={'/'}><a>Logo</a></Link>
                </div>
                <div className=''>
                    <ul className='flex items-center space-x-6'>
                        <Link href={'/#about'}><a><li>About</li></a></Link>
                        <Link href={'/#exprience'}><a><li>Exprience</li></a></Link>
                        <Link href={'/#work'}><a><li>Work</li></a></Link>
                        <Link href={'/#contact'}><a><li>Contact</li></a></Link>
                    </ul>
                </div>
            </nav>
        </header>
        <div className='w-10 fixed bottom-0 left-5 right-auto flex flex-col '>
            <div className='w-[1px] h-10 self-center bg-black'></div>
            <ul className='flex flex-col text-center my-5'>
                <li><a href="https://www.linkedin.com/in/mk-mukul/" target={"_blank"} className='p-2.5 inline-block'><FiLinkedin size={"20px"} /></a></li>
                <li><a href="https://github.com/mk-mukul" target={"_blank"} className='p-2.5 inline-block'><FiGithub size={"20px"} /></a></li>
                <li><a href="https://www.instagram.com/mk_mucool/" target={"_blank"} className='p-2.5 inline-block'><FiInstagram size={"20px"} /></a></li>
                <li><a href="https://twitter.com/mk_mucool" target={"_blank"} className='p-2.5 inline-block'><FiTwitter size={"20px"} /></a></li>
            </ul>
            <div className='w-[1px] h-24 self-center bg-black'></div>
        </div>
        <div className='w-10 fixed bottom-0 right-5 left-auto flex flex-col'>
            <div className='w-[1px] h-10 self-center bg-black'></div>
            <div className='flex flex-col relative items-center my-5'>
                <a href="mailto:mukul.raj@iitgn.ac.in" target={"_blank"} className='py-[5px] px-2.5' style={{ writingMode: "vertical-lr", letterSpacing: "1px"}}>mukul.raj@iitgn.ac.in</a>
            </div>
            <div className='w-[1px] h-24 self-center bg-black'></div>
        </div>
    </>
    )
}

export default Navbar