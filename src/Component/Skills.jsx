import React from "react";
import Marquee from "react-marquee-slider";
import html from "../Images/html.png";
import css from "../Images/tailwind.png";
import react from "../Images/react.png";
import java from "../Images/Java_Logo.png";
import mongodb from "../Images/mongodb.png";
import node from "../Images/node.png";
import js from "../Images/js.png";
import mysql from "../Images/mysql.png"
import express from "../Images/express-js.png"

const skill = [
  { name: "HTML", image: html },
  { name: "Tailwind CSS", image: css },
  { name: "React JS", image: react },
  { name: "Java", image: java },
  { name: "JavaScript", image: js },
  { name: "Node JS", image: node },
  { name: "MongoDB", image: mongodb },
  {name:"MySQL",image:mysql},
  {name:"Express JS",image:express}
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center text-white gap-10 px-4 backdrop-blur-sm" id="skill">
      <p className="text-3xl font-semibold text-blue-600">Skills</p>
      <div className="w-full overflow-hidden mt-6">
        <Marquee velocity={20} resetAfterTries={200} scatterRandomly={false}>
          {skill.map((item, index) => (
            <div key={index} className="mx-6 md:mx-12">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl" 
              />
              <p className="text-lg md:text-xl text-center mt-2">{item.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
