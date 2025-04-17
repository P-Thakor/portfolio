"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    skills: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      about: true,
      skills: true,
      projects: true,
      contact: true,
    });
  }, []);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section 
        id="home" 
        className={`min-h-[90vh] flex flex-col justify-center items-center py-20 text-center transition-opacity duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
            Hi, I'm Parth Thakor
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            A passionate Web Developer specializing in MERN stack
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </a>
            <a 
              href="https://github.com/P-Thakor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section 
        id="about" 
        className={`py-20 transition-opacity duration-1000 ${
          isVisible.about ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a web developer passionate about building applications using modern technologies. 
              I specialize in the MERN (MongoDB, Express, React, Node.js) stack and enjoy working on 
              challenging projects that allow me to continuously learn and improve my skills.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className={`py-20 bg-gray-50 dark:bg-gray-900 transition-opacity duration-1000 ${
          isVisible.skills ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fab fa-react"></i>
                </div>
                <h3 className="font-medium">React</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fab fa-node-js"></i>
                </div>
                <h3 className="font-medium">Node.js</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fab fa-js"></i>
                </div>
                <h3 className="font-medium">JavaScript</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fab fa-html5"></i>
                </div>
                <h3 className="font-medium">HTML5</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <h3 className="font-medium">CSS3</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fab fa-git-alt"></i>
                </div>
                <h3 className="font-medium">Git</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="font-medium">MongoDB</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fab fa-typescript"></i>
                </div>
                <h3 className="font-medium">TypeScript</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className={`py-20 transition-opacity duration-1000 ${
          isVisible.projects ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="bg-white dark:bg-gray-800 p-5">
                  <h3 className="text-xl font-bold mb-2">Project Pankh</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A comprehensive project showcasing modern web development techniques and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Node.js</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/P-Thakor/project_pankh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View Code
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="bg-white dark:bg-gray-800 p-5">
                  <h3 className="text-xl font-bold mb-2">SaaS Starter</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A starter template for building SaaS applications with user authentication, subscription management, and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Express</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">MongoDB</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/P-Thakor" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View Code
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="bg-white dark:bg-gray-800 p-5">
                  <h3 className="text-xl font-bold mb-2">Mystery Messenger</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A secure messaging application with end-to-end encryption and self-destructing messages.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Socket.io</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">React</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/P-Thakor" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View Code
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="bg-white dark:bg-gray-800 p-5">
                  <h3 className="text-xl font-bold mb-2">Car Showcase</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A TypeScript-based application showcasing cars with detailed information and filtering capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Tailwind CSS</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/P-Thakor/car_showcase" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View Code
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="bg-white dark:bg-gray-800 p-5">
                  <h3 className="text-xl font-bold mb-2">Student CS</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A student management system for computer science departments with course registration and grade tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Express</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">MySQL</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/P-Thakor/student_cs" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View Code
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-20 bg-gray-50 dark:bg-gray-900 transition-opacity duration-1000 ${
          isVisible.contact ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10"></div>
          
          <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div className="mb-6 text-center">
              <p className="text-gray-700 dark:text-gray-300">
                Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">hello@parththakor.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fab fa-github"></i>
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a 
                    href="https://github.com/P-Thakor" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    github.com/P-Thakor
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/parththakor" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    linkedin.com/in/parththakor
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </div>
                <div>
                  <h3 className="font-medium">Twitter</h3>
                  <a 
                    href="https://twitter.com/ParthT1410" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    @ParthT1410
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
