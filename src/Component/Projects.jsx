import React from 'react';
import PixelCode from "../Images/PixelCode.png"
import Blog from "../Images/Blog.png"
import CodeReviewer from "../Images/CodeReviewer.png"

const project = [
  {
    id: 1,
    name: 'Snip-AI',
    image: CodeReviewer,
    description: `SnipAI is an intelligent code review platform powered by AI that helps developers analyze, debug, and improve their code 
    efficiently. It offers real-time syntax highlighting, instant feedback, and suggestions to enhance code quality, readability, and performance. Designed for both beginners and experienced 
    developers, SnipAI streamlines the review process with smart insights and clean UI for maximum productivity.

`,
    features: [
      'AI-powered code analysis with improvement suggestions and error detection.',
      'One-click review generation with concise, actionable feedback.',
      'Clean, responsive UI for an intuitive developer experience.',
      'Backend API with secure endpoints for processing and storing code and reviews.'
    ],
    code: 'https://github.com/ashishsinghAK/AI-Code_Reviewer',
    link: 'https://ai-code-reviewer-five-teal.vercel.app/'
  },
  {
    id: 2,
    name: 'Pixel-Code',
    image: PixelCode,
    description: `Pixel Code is a comprehensive online learning platform that enables instructors to create and sell courses,
    while students can purchase and access high-quality educational content. It is designed to provide a seamless and engaging learning experience, incorporating essential features for both educators and learners.`,
    features: [
      'Instructors can create courses with video lectures, PDFs, assignments, and quizzes.',
      'Secure payments with Stripe/Razorpay integration.',
      'Student dashboard to track enrolled courses and progress.',
      'Admin panel for managing users, courses, and sales analytics.',
      'Authentication and authorization using JWT and role-based access.',
    ],
    code: 'https://github.com/ashishsinghAK/Pixel-Code',
    link: 'https://pixel-code.onrender.com/'
  },
  {
    id: 3,
    name: 'BlogSite',
    image: Blog,
    description: 'BlogSite is a dynamic blogging platform that enables users to create, publish, and engage with blogs effortlessly. It offers a rich user experience with features like comments, likes/dislikes, and keyword-based filtering to discover relevant content. The platform includes an admin dashboard for monitoring user activity, ensuring a seamless and well-managed blogging ecosystem.',
    features: [
      'Users can create, edit, and delete blogs.',
      'Like and dislike functionality for comments.',
      'Keyword-based blog filtering and search.',
      'Admin dashboard to track user activity.',
    ],
    code: 'https://github.com/ashishsinghAK/Blog_App',
    link: 'https://blog-app-98o2.onrender.com/'
  },

];

const Projects = () => {
  return (
    <div className='relative w-full overflow-hidden py-16' id='project'>
      {/* Modern background elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'>
        <div className='absolute top-0 left-0 w-full h-full opacity-20'>
          <div className='absolute top-20 -left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-[80px]'></div>
          <div className='absolute bottom-20 -right-20 w-64 h-64 bg-purple-600 rounded-full filter blur-[80px]'></div>
        </div>
      </div>

      {/* Content container */}
      <div className='relative z-10 flex flex-col items-center px-4 mx-auto max-w-7xl'>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-6'>
          Projects
        </h2>
        <p className='text-lg text-gray-300 mb-12 text-center max-w-3xl'>
          Showcasing my innovative projects, built with expertise in MERN, backend development, and cutting-edge technologies.
        </p>
        
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full'>
          {project.map((p) => (
            <div 
              key={p.id} 
              className='bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 p-6'
            >
              <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300'>
                {p.name}
              </h3>
              <img 
                src={p.image} 
                alt={p.name} 
                className='mt-4 rounded-lg w-full h-48 object-cover border border-gray-800'
              />
              <p className='text-gray-300 mt-4'>{p.description}</p>
              <ul className='mt-4 space-y-2'>
                {p.features.map((feature, i) => (
                  <li key={i} className='flex items-start text-gray-300'>
                    <svg className='w-4 h-4 mt-1 mr-2 text-yellow-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='flex gap-4 mt-6 flex-wrap'>
                {p.code && (
                  <a 
                    href={p.code} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity'
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                    </svg>
                    Source Code
                  </a>
                )}
                {p.link && (
                  <a 
                    href={p.link} 
                    target='_blank'
                    className='inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium'
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
