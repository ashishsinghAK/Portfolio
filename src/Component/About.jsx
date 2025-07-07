import React from 'react';

const About = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto py-12" id='about'>
            <div className="flex flex-col items-center gap-8 bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-10 md:p-12 rounded-3xl border border-gray-700 shadow-2xl shadow-blue-900/20">
                {/* Animated title with decoration */}
                <div className="relative">
                    <h1 className="text-4xl font-bold text-center sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                        About Me
                    </h1>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                    <div className="absolute -bottom-3 right-1/2 transform translate-x-1/2 w-20 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full"></div>
                </div>

                {/* Content with animated list items */}
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                        <div className="text-blue-400 text-2xl mt-1">👋</div>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            Hi, I'm <span className="text-blue-300 font-medium">Ashish Kumar Singh</span>, a passionate MERN Stack Developer with a deep love for backend development and a strong command of Data Structures and Algorithms (DSA). My foundation in core CS subjects like OS, DBMS, and Computer Networks enables me to design efficient, scalable systems.
                        </p>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                        <div className="text-blue-400 text-2xl mt-1">⚙️</div>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            Specializing in <span className="text-cyan-300 font-medium">MongoDB, Express.js, React, and Node.js</span>, I build high-performance applications with emphasis on backend logic, API development, and database management. I excel at architecting scalable systems and optimizing server performance.
                        </p>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                        <div className="text-blue-400 text-2xl mt-1">🚀</div>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            I thrive on problem-solving and constantly seek to innovate. If you need a <span className="text-blue-300 font-medium">backend-focused developer</span> who loves tackling complex challenges and building impactful solutions, <span className="text-cyan-300">let's connect</span> and create something amazing!
                        </p>
                    </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {['MERN Stack', 'Node.js', 'Express', 'MongoDB', 'React', 'DSA', 'API Design', 'System Architecture', 'Database Optimization', 'Performance Tuning'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-800 hover:bg-blue-900/50 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;