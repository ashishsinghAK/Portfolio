
import React from 'react'

const project = [
  {
    id:1,
    name:"Pixel-Code",
    description:"A Online Education Platform that enable Instructors to create and sell Courses while allowing Students to Purchase and learn seamlessly",
    code:"https://github.com/ashishsinghAK/Pixel-Code"
  },
  {
    id:2,
    name:"BlogSite",
    description:"A feature rich Blogging platform where user can create and engage with blogs through comments, likes and dislikes",
    code:"https://github.com/ashishsinghAK/Blog_App"
  },
  {
    id:3,
    name:"Email Assistant",
    description:"An AI-powered email response assistant designed to generate intelligent and context-aware replies. It also allows users to integrate it with their mail services",
    code:""
  }
]

const Projects = () => {
  return (
    <div className='flex flex-col items-center w-[60vw] justify-center gap-5'>
      <p className='text-4xl font-semibold'>Projects</p>
      <p className='text-slate-200'>Showcasing my innovative projects, built with expertise in MERN, backend development, 
        and cutting-edge technologies.</p>
       
            {
              project.map((p,index) => (
                <div key={index} className='border-b border-t w-[55vw] p-5 flex flex-col gap-2 rounded-3xl border-blue-500'>
                    <p className='text-3xl text-blue-500 font-bold'>{p.name}</p>
                    <p className='text-slate-400'>{p.description}</p>
                    <a href={p.code} className='border border-slate-500 p-2 rounded-3xl w-fit bg-black font-semibold'>
                      Source Code</a>
                </div>
              ))
            }
        
    </div>
  )
}

export default Projects