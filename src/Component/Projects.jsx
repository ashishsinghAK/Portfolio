import React from 'react';

const project = [
  {
    id: 1,
    name: 'Pixel-Code',
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
  },
  {
    id: 2,
    name: 'BlogSite',
    description: 'BlogSite is a dynamic blogging platform that enables users to create, publish, and engage with blogs effortlessly. It offers a rich user experience with features like comments, likes/dislikes, and keyword-based filtering to discover relevant content. The platform includes an admin dashboard for monitoring user activity, ensuring a seamless and well-managed blogging ecosystem.',
    features: [
      'Users can create, edit, and delete blogs.',
      'Like and dislike functionality for comments.',
      'Keyword-based blog filtering and search.',
      'Admin dashboard to track user activity.',
    ],
    code: 'https://github.com/ashishsinghAK/Blog_App',
  },
  {
    id: 3,
    name: 'Email Assistant',
    description: 'Email Assistant is an AI-driven tool that helps users quickly generate smart and relevant email responses. It integrates seamlessly with email services, allowing users to draft professional and personalized replies with ease.',
    features: [
      'Integrates seamlessly with email services.',
      'AI-driven response generation.',
      'Supports custom templates for professional emails.',
      'Chrome extension for quick email replies.',
    ],
    code: '',
  },
];

const Projects = () => {
  return (
    <div className='flex flex-col items-center w-full px-4 py-8 bg-gradient-to-r from-black to-gray-900 text-white' id='project'>
      <h2 className='text-4xl font-semibold text-blue-500 mb-6'>Projects</h2>
      <p className='text-lg text-slate-300 mb-8 text-center'>Showcasing my innovative projects, built with expertise in MERN, backend development, and cutting-edge technologies.</p>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {project.map((p) => (
          <div key={p.id} className='bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105'>
            <h3 className='text-2xl text-yellow-400 font-bold'>{p.name}</h3>
            <p className='text-slate-400 mt-2'>{p.description}</p>
            <ul className='mt-4 list-disc pl-5 space-y-2'>
              {p.features.map((feature, i) => (
                <li key={i} className='text-slate-300'>{feature}</li>
              ))}
            </ul>
            {p.code && (
              <a href={p.code} target='_blank' rel='noopener noreferrer' className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
                Source Code
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
