import React from 'react'
import { Link } from "react-scroll"
import { MdMessage } from "react-icons/md";
const Navbar = () => {
    return (
        <div className='w-[90vw]'>
            <nav className=' flex justify-around m-5 items-center sticky font-semibold'>
                <div>
                    Portfolio
                </div>

                <div className='flex w-[15em] justify-between cursor-pointer'>
                    <Link className='hover:text-orange-500'>Home</Link>
                    <Link className=' hover:text-orange-500'>About</Link>
                    <Link className=' hover:text-orange-500'>Project</Link>
                </div>


                    <button className='flex items-center cursor-pointer bg-white text-black p-2 hover:bg-slate-200
                    font-semibold rounded-3xl gap-2'>
                        <MdMessage />
                       Contact Me
                    </button>
               
            </nav>
        </div>
    )
}

export default Navbar