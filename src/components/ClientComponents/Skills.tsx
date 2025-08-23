'use client';

import React, { useState } from 'react';
import { Code, Database, Server, Globe, Cloud, Zap, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React.js', level: 95, experience: '3+ years', projects: 25 },
        { name: 'Next.js', level: 92, experience: '2+ years', projects: 18 },
        { name: 'TypeScript', level: 90, experience: '2+ years', projects: 20 },
        { name: 'JavaScript (ES6+)', level: 95, experience: '3+ years', projects: 30 },
        { name: 'HTML5 & CSS3', level: 98, experience: '3+ years', projects: 35 },
        { name: 'Tailwind CSS', level: 95, experience: '2+ years', projects: 22 },
        { name: 'SASS/SCSS', level: 88, experience: '2+ years', projects: 15 },
        { name: 'Redux/Zustand', level: 90, experience: '2+ years', projects: 16 }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 93, experience: '3+ years', projects: 28 },
        { name: 'Express.js', level: 95, experience: '3+ years', projects: 25 },
        { name: 'Laravel', level: 90, experience: '2+ years', projects: 15 },
        { name: 'PHP', level: 88, experience: '2+ years', projects: 18 },
        { name: 'RESTful APIs', level: 95, experience: '3+ years', projects: 30 },
        { name: 'GraphQL', level: 82, experience: '1+ years', projects: 8 },
        { name: 'Socket.io', level: 88, experience: '2+ years', projects: 12 },
        { name: 'JWT Authentication', level: 92, experience: '2+ years', projects: 20 }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'MongoDB', level: 93, experience: '3+ years', projects: 22 },
        { name: 'MySQL', level: 90, experience: '2+ years', projects: 18 },
        { name: 'PostgreSQL', level: 88, experience: '2+ years', projects: 15 },
        { name: 'Redis', level: 85, experience: '1+ years', projects: 10 },
        { name: 'Mongoose', level: 95, experience: '3+ years', projects: 20 },
        { name: 'Firebase', level: 85, experience: '1+ years', projects: 8 },
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 85, experience: '2+ years', projects: 12 },
        { name: 'Vercel', level: 95, experience: '2+ years', projects: 25 },
        { name: 'Netlify', level: 90, experience: '2+ years', projects: 18 },
        { name: 'Docker', level: 82, experience: '1+ years', projects: 8 },
        { name: 'GitHub Actions', level: 88, experience: '2+ years', projects: 15 },
        { name: 'Heroku', level: 85, experience: '2+ years', projects: 10 }
      ]
    },
    tools: {
      title: 'Tools & Workflow',
      icon: Zap,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Git & GitHub', level: 95, experience: '3+ years', projects: 40 },
        { name: 'VS Code', level: 98, experience: '3+ years', projects: 50 },
        { name: 'Figma', level: 85, experience: '2+ years', projects: 20 },
        { name: 'Postman', level: 92, experience: '3+ years', projects: 30 },
        { name: 'Webpack/Vite', level: 88, experience: '2+ years', projects: 25 },
        { name: 'ESLint/Prettier', level: 90, experience: '2+ years', projects: 35 },
        { name: 'Jest/Vitest', level: 85, experience: '2+ years', projects: 18 }
      ]
    }
  };

  const techStacks = [
    {
      name: 'MERN Stack',
      description: 'MongoDB, Express.js, React, Node.js - Full-stack JavaScript development',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      projects: 18,
      experience: '3+ years',
      color: 'from-green-400 to-blue-500'
    },
    {
      name: 'Next.js Full-Stack',
      description: 'Next.js with TypeScript, Prisma, and modern deployment',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      projects: 15,
      experience: '2+ years',
      color: 'from-black to-gray-600'
    },
    {
      name: 'Laravel Stack',
      description: 'Laravel with MySQL, Blade templates, and modern PHP',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      projects: 12,
      experience: '2+ years',
      color: 'from-red-500 to-orange-500'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-15">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Technical{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              MERN Stack • Next.js • Laravel <br></br> Full-Stack Development Expertise
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
                <span className="text-blue-600 font-semibold">2+ Years Experience</span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg">
                <span className="text-green-600 font-semibold">7+ Projects Completed</span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg">
                <span className="text-purple-600 font-semibold">Multiple Tech Stacks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Stack <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Specializations</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${stack.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {stack.name}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {stack.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {stack.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Skills Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Detailed <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`inline-flex items-center cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{skill.name}</h3>
                  <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div
                    className={`bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Comparison Chart */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Skills <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Comparison</span>
          </h2>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frontend vs Backend</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">Frontend Development</span>
                      <span className="text-blue-600 font-bold">94%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">Backend Development</span>
                      <span className="text-green-600 font-bold">91%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Proficiency */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Stack Proficiency</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">MERN Stack</span>
                      <span className="text-green-600 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">Next.js Full-Stack</span>
                      <span className="text-slate-600 font-bold">92%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-black to-gray-600 h-4 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">Laravel Stack</span>
                      <span className="text-red-600 font-bold">89%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Philosophy */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            My Development <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Philosophy</span>
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed italic mb-8">
              "Mastering multiple tech stacks isn't just about knowing syntax—it's about understanding when to use the right tool for the right job and creating solutions that scale."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
                <p className="text-blue-100">Writing maintainable, scalable code that stands the test of time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                <p className="text-blue-100">Optimizing applications for speed, efficiency, and user experience</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-blue-100">Staying ahead with cutting-edge technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Leverage My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Whether you need a MERN stack application, a Next.js project, or a Laravel backend,
            I have the skills and experience to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/contact'}>
              <button className="inline-flex items-center cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start a Project
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;