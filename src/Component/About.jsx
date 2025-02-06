import React from 'react';

const About = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 w-[90vw]" id='about'>
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-4xl font-semibold text-center sm:text-5xl lg:text-4xl">About</h1>
                <p className="text-slate-500 text-center sm:text-left">
                    Hi, I'm Ashish Kumar Singh, a passionate MERN Stack Developer with a deep love for backend development
                    and a strong command of Data Structures and Algorithms (DSA). I have a solid grasp of core computer science
                    subjects like Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks, which
                    help me design efficient, scalable, and robust systems.
                </p>

                <p className="text-slate-500 text-center sm:text-left">
                    Specializing in MongoDB, Express.js, React, and Node.js, I focus on building high-performance applications
                    with a strong emphasis on backend logic, API development, and database management. I enjoy architecting
                    scalable systems, optimizing server performance, and ensuring seamless data flow between the front-end and back-end.
                </p>

                <p className="text-slate-500 text-center sm:text-left">
                    I thrive on problem-solving and constantly seek opportunities to innovate and improve system performance.
                    If you're looking for a backend-focused developer who loves solving complex challenges and building impactful
                    solutions, let's connect and create something amazing!
                </p>
            </div>
        </div>
    );
};

export default About;
