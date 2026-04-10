'use client';

import React, { useState } from 'react';
import { Code, Database, Server, Globe, Cloud, Zap, Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Globe,
      color: '[#22f2ef] to-[#22f2ef]/80',
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
      color: '[#22f2ef] to-[#22f2ef]/80',
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
      color: '[#22f2ef] to-[#22f2ef]/80',
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
      color: '[#22f2ef] to-[#22f2ef]/80',
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
      color: '[#22f2ef] to-[#22f2ef]/80',
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
    },
    {
      name: 'Next.js Full-Stack',
      description: 'Next.js with TypeScript, Prisma, and modern deployment',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      projects: 15,
      experience: '2+ years',
    },
    {
      name: 'Laravel Stack',
      description: 'Laravel with MySQL, Blade templates, and modern PHP',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      projects: 12,
      experience: '2+ years',
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-15">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                Technical{' '}
                <span className="text-[#22f2ef]">
                  Skills
                </span>
                <br />
                <span className="text-4xl md:text-6xl"> Full Stack Developer</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                MERN Stack • Next.js • Laravel <br></br> Full-Stack Development Expertise
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">2+ Years Experience</span>
                </div>
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">7+ Projects Completed</span>
                </div>
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">Multiple Tech Stacks</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tech Stack Specializations */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight text-center">
              Stack <span className="text-[#22f2ef]">Specializations</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {techStacks.map((stack, index) => (
              <AnimatedSection key={index}>
                <div key={index} className="group rounded-2xl p-8 border border-[#22f2ef]/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl border border-[#22f2ef]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Code className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#22f2ef] transition-colors duration-300">
                    {stack.name}
                  </h3>
                  <p className="text-white mb-6 leading-relaxed">
                    {stack.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {stack.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 text-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50 ">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Skills Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight text-center">
              Detailed <span className="text-[#22f2ef]">Expertise</span>
            </h2>
          </AnimatedSection>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 my-15">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <AnimatedSection key={key}>
                  <button
                    onClick={() => setActiveCategory(key)}
                    className={`inline-flex items-center cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === key
                      ? `bg-${category.color} text-white shadow-lg`
                      : 'text-[#22f2ef] border border-[#22f2ef]/50'
                      }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {category.title}
                  </button>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <AnimatedSection key={index}>
                <div className="text-[#22f2ef] p-6 rounded-xl shadow-lg border border-[#22f2ef]/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">color
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    <span className="text-sm font-semibold text-[#22f2ef]">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                    <div
                      className={`bg-${skillCategories[activeCategory as keyof typeof skillCategories].color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Comparison Chart */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight text-center">
              Skills <span className="text-[#22f2ef]">Comparison</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-3xl p-8 shadow-xl border border-[#22f2ef]/50 mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">Frontend vs Backend</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">Frontend Development</span>
                        <span className="text-[#22f2ef] font-bold">94%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-4">
                        <div className="bg-[#22f2ef] h-4 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">Backend Development</span>
                        <span className="text-[#22f2ef] font-bold">91%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-4">
                        <div className="bg-[#22f2ef] h-4 rounded-full" style={{ width: '91%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Proficiency */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">Stack Proficiency</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">MERN Stack</span>
                        <span className="text-[#22f2ef] font-bold">95%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-4">
                        <div className="bg-[#22f2ef] h-4 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">Next.js Full-Stack</span>
                        <span className="text-[#22f2ef] font-bold">92%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-4">
                        <div className="bg-[#22f2ef] h-4 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">Laravel Stack</span>
                        <span className="text-[#22f2ef] font-bold">89%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-4">
                        <div className="bg-[#22f2ef] h-4 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Philosophy */}
      <section className="py-10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-17 leading-tight text-center">
              My Development <span className="text-[#22f2ef]">Philosophy</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <blockquote className="text-2xl md:text-3xl font-medium text-[#22f2ef] leading-relaxed italic mb-8">
                "Mastering multiple tech stacks isn't just about knowing syntax—it's about understanding when to use the right tool for the right job and creating solutions that scale."
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#22f2ef] mb-2">Clean Code</h3>
                  <p className="text-blue-100">Writing maintainable, scalable code that stands the test of time</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#22f2ef] mb-2">Performance</h3>
                  <p className="text-blue-100">Optimizing applications for speed, efficiency, and user experience</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#22f2ef] mb-2">Innovation</h3>
                  <p className="text-blue-100">Staying ahead with cutting-edge technologies and best practices</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Skills;