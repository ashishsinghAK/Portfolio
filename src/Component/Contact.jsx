import React, { useRef } from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import emailjs from "@emailjs/browser";

const service = import.meta.env.VITE_SERVICE_KEY;
const template = import.meta.env.VITE_TEMPLATE_KEY;
const publickey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(service, template, form.current, publickey)
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("Email has been sent!");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='flex flex-col items-center p-5 gap-7 w-full' id='contact'>
      <p className='text-4xl font-semibold text-center'>Contact Me</p>
      <p className='text-2xl font-mono text-center'>Have a Question? Let's Talk!</p>

      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className='flex flex-col gap-5 w-[90%] max-w-3xl border p-6 md:p-10 rounded-xl border-slate-500 shadow-lg'
      >
        <input 
          type="text" 
          placeholder='Your Name' 
          className='border p-3 rounded-xl border-slate-500 w-full' 
          name='your_name' 
          required
        />
        <input 
          type="email" 
          placeholder='Enter your Email' 
          className='border p-3 rounded-xl border-slate-500 w-full' 
          name='your_email' 
          required
        />
        <textarea 
          className='border p-3 rounded-xl border-slate-500 w-full h-40 resize-none' 
          placeholder='Your Message' 
          name='message' 
          required
        />
        <button 
          className='border w-full md:w-fit px-6 py-3 rounded-xl cursor-pointer hover:bg-slate-900 border-slate-500 font-semibold transition-all' 
          type='submit'
        >
          Submit
        </button>
      </form>

      <div className='flex gap-8 md:gap-16 flex-wrap justify-center'>
        <a href="https://www.linkedin.com/in/ashish-kumar-singh-a852b426a/" className='text-4xl text-blue-500'>
          <BsLinkedin />
        </a>
        <a href="https://www.youtube.com/@factorialworld394" className='text-4xl text-red-600'>
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/ashishksingh20/#" className='text-4xl text-orange-700'>
          <SiInstagram />
        </a>
      </div>

      <div className='text-center'>
        <p>© {new Date().getFullYear()} Ashish Kumar Singh. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
