import React from 'react';
import image from '../Images/image.png';

const Intro = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900
    rounded-4xl
 p-8 md:p-12  text-blue-500" id="intro">

      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Subpart */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-2xl font-semibold">Hi Everyone,</p>
          <h1 className="text-4xl lg:text-6xl font-bold">
            I&apos;m <span className="text-red-500">Ashish Kr. Singh</span>,<br />
            a Passionate Web Developer
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Specialized in <span className="text-orange-500">MERN Stack Development</span>,<br />
            I craft seamless user experiences and build powerful backend solutions to bring ideas to life.
          </p>
        </div>

        {/* Right Subpart (Image) */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="Ashish Kr. Singh"
            className="w-96 h-96 rounded-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Intro;



