import React from 'react';
import image from "../Images/image.png";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center p-4" id='intro'>
      {/* Left Subpart */}
      <div className="flex flex-col gap-6 font-stretch-extra-expanded text-center md:text-left">
        <p className="font-semibold">Hi Everyone,</p>
        <p className="lg:text-5xl text-3xl">
          I'm <strong className="text-yellow-200">Ashish Kr. Singh</strong>,<br />
          a Passionate Web Developer
        </p>
        <p className="text-lg md:text-xl">
          Specialized in <strong className="text-orange-500">MERN Stack Development</strong>,
          <br />
          I craft seamless user experiences and build powerful backend solutions to bring ideas to life.
        </p>
      </div>

      {/* Right Subpart (Image) */}
      <div className="mt-8 md:mt-0">
        <img
          src={image}
          alt="Ashish Kr. Singh"
          className="w-96 h-96 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Intro;
