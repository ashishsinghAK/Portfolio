import React, { useState } from 'react';
import { Link } from "react-scroll";
import { MdMessage, MdMenu, MdClose } from "react-icons/md";
import { SiBackblaze } from "react-icons/si";
import { SiAuchan } from "react-icons/si";
import { SiKaios } from "react-icons/si";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full sticky top-0 left-0 z-50'>
            <nav className='flex justify-between items-center p-5 max-w-6xl mx-auto'>
                <div className='text-xl font-bold flex items-center gap-1 font-mono'>
                    {/* <PiCodesandboxLogoFill/>Ashish | M+E+R+N<PiCodesandboxLogoFill/> */}
                    <SiAuchan/><SiKaios/>
                    <div className='text-orange-600'><SiBackblaze/></div>
                    
                </div>
                
                {/* Desktop Menu */}
                <div className='hidden md:flex space-x-6 font-semibold'>
                    <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
                    <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                    <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500}>Project</Link>
                    <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
                </div>

                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>
                    <button className='hidden md:flex items-center cursor-pointer bg-black text-white px-4 py-2 hover:bg-gray-800 font-semibold rounded-3xl gap-2'>
                        <MdMessage />
                        Contact Me
                    </button>
                </Link>
                
                {/* Mobile Menu Toggle */}
                <button className='md:hidden text-2xl' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <MdClose /> : <MdMenu />}
                </button>
            </nav>
            
            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 right-0 h-[80vh] w-[70vw] bg-gray-900 shadow-md flex flex-col items-end p-5 space-y-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className='text-2xl self-end' onClick={() => setIsOpen(false)}>
                    <MdClose />
                </button>
                <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsOpen(false)}>Home</Link>
                <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setIsOpen(false)}>About</Link>
                <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsOpen(false)}>Project</Link>
                <Link className='hover:text-orange-500 cursor-pointer' activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsOpen(false)}>
                    <button className='flex items-center cursor-pointer bg-black text-white px-4 py-2 hover:bg-gray-800 font-semibold rounded-3xl gap-2'>
                        <MdMessage />
                        Contact Me
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;


