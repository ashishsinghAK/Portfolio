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
    <div className='flex flex-col items-center w-full px-4 py-8 bg-gradient-to-r from-black to-gray-900 text-white' id='project'>
      <h2 className='text-4xl font-semibold text-blue-500 mb-6'>Projects</h2>
      <p className='text-lg text-slate-300 mb-8 text-center'>Showcasing my innovative projects, built with expertise in MERN, backend development, and cutting-edge technologies.</p>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {project.map((p) => (
          <div key={p.id} className='bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl shadow-lg '>
            <h3 className='text-2xl text-yellow-400 font-bold'>{p.name}</h3>
            <img src={p.image} alt="" className='mt-2'/>
            <p className='text-slate-400 mt-2'>{p.description}</p>
            <ul className='mt-4 list-disc pl-5 space-y-2'>
              {p.features.map((feature, i) => (
                <li key={i} className='text-slate-300'>{feature}</li>
              ))}
            </ul>
            <p className='flex gap-5'>
              {p.code && (
                <a href={p.code} target='_blank' rel='noopener noreferrer' className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
                  Source Code
                </a>
              )}
              {
                p.link && (
                  <a href={p.link} target='_blank' className='mt-4 inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600'>
                    Go-Live</a>
                )
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
