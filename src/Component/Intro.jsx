import React from 'react';
import image from '../Images/image.png';
import { ImFolderDownload } from "react-icons/im";

const Intro = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16" id="intro">
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left Subpart */}
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left order-2 md:order-1">
          <p className="text-xl sm:text-2xl font-medium text-blue-400 animate-fadeIn">
            Hi Everyone, <span className="wave-hand">👋</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
            I'm <span className="text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ashish Kr. Singh</span>,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
              a Passionate Web Developer
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-2 text-gray-300 leading-relaxed">
            Specialized in <span className="font-semibold text-yellow-500 animate-pulse">MERN Stack Development</span>,<br />
            I craft seamless user experiences and build powerful backend solutions.
          </p>

          <a href="Resume_Ashish.pdf" download="Ashish_Kumar_Singh_Resume.pdf" className='flex border-2 items-center gap-2
          border-blue-900 w-fit p-2 rounded-xl font-bold bg-blue-800 hover:bg-blue-900 animate-bounce'>
            Resume
            <ImFolderDownload/>
          </a>
          
        </div>

        {/* Right Subpart (Image) */}
        <div className="order-1 md:order-2 flex justify-center items-center relative">
          <div className="relative group">
            <img
              src={image}
              alt="Ashish Kr. Singh"
              className="w-[12em] h-[12em] sm:w-[15em] sm:h-[15em] md:w-[18em] md:h-[18em] rounded-full object-cover border-4 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500 shadow-xl shadow-blue-500/10"
            />
            {/* Floating dots decoration */}
            <div className="absolute -top-6 -left-6 w-4 h-4 rounded-full bg-blue-400 animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-3 h-3 rounded-full bg-blue-300 animate-float-delay opacity-80"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;