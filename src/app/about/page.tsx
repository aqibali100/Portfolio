import React from 'react';
import { Calendar, MapPin, Award, Users, Coffee, Clock, ArrowRight, Code, Lightbulb, Target, Heart, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codewithaqib.com";
  const currentPath = "/about";
  const fullUrl = `${baseUrl}${currentPath}`;

  return {
    title: "Explore My Journey - CodeWithAqib",
    description:
      "Meet Aqib—a results-driven full-stack developer building fast, accessible web apps with React, Next.js, Node.js and Laravel. Learn the story and approach.",
    keywords: ["CodeWithAqib", "solutions", "Web Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Php Developer", "Laravel Developer", "Next js Developer", "React js Developer", "Node js Developer", "Most Famous web Developer", "valueable web Developer", "Most Demanding Web developer",
    ],
    openGraph: {
      title: "Explore My Journey - CodeWithAqib",
      description:
        "Meet Aqib—a results-driven full-stack developer building fast, accessible web apps with React, Next.js, Node.js and Laravel. Learn the story and approach.",
      url: fullUrl,
      type: "website",
      siteName: "CodeWithAqib",
      images: [
        {
          url: `${baseUrl}/faviconlogo.png`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Explore My Journey - CodeWithAqib",
      description:
        "Meet Aqib—a results-driven full-stack developer building fast, accessible web apps with React, Next.js, Node.js and Laravel. Learn the story and approach.",
      images: `${baseUrl}/faviconlogo.png`,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Started as a Junior Developer',
      description: 'Started my coding journey as a junior developer, honing my skills in web development.',
      icon: Code
    },
    {
      year: '2024',
      title: 'MERN Stack Expertise',
      description: 'Proficient in MERN stack technologies, including React, Next.js, Node.js, and MongoDB.',
      icon: Lightbulb
    },
    {
      year: '2024',
      title: 'Next.js and Node.js Expertise',
      description: 'Specializing in Next.js for server-side rendering and Node.js for efficient backend development.',
      icon: Target
    },
    {
      year: '2025',
      title: 'Php and Laravel Expertise',
      description: 'Proficient in PHP and Laravel for building robust web applications.',
      icon: Heart
    }
  ];

  const achievements = [
    { icon: Award, number: '7+', label: 'Projects Completed', color: 'from-blue-500 to-blue-600' },
    { icon: Users, number: '10+', label: 'Happy Clients', color: 'from-green-500 to-green-600' },
    { icon: Coffee, number: '30+', label: 'Cups of Coffee', color: 'from-amber-500 to-amber-600' },
    { icon: Clock, number: '2+', label: 'Years Experience', color: 'from-purple-500 to-purple-600' }
  ];

  const skills = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind `CSS', 'JavaScript'], percentage: 95 },
    { category: 'Backend', skills: ['Node.js', 'PHP', 'Laravel', 'Express.js', 'FastAPI'], percentage: 90 },
    { category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Supabase'], percentage: 88 },
    { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Vercel', 'Firebase', 'CI/CD'], percentage: 85 },
    { category: 'Design', skills: ['Figma', 'UI/UX', 'Responsive Design', 'Prototyping'], percentage: 78 }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'I believe in writing clean, maintainable code that stands the test of time.',
      icon: '🎯'
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I stay ahead by constantly learning new skills.',
      icon: '📚'
    },
    {
      title: 'Client Success',
      description: 'Your success is my success. I\'m committed to delivering solutions that drive results.',
      icon: '🚀'
    },
    {
      title: 'Innovation',
      description: 'I love exploring new technologies and finding creative solutions to complex problems.',
      icon: '💡'
    }
  ];

  const workExperience = [
    {
      title: 'MERN Stack Developer - Internship',
      company: 'System Solutions Faisalabad',
      type: 'Full-time',
      description: 'Leading development of enterprise-level web applications using MERN stack and Next.js.',
      achievements: [
        'Architected and built 5 major client applications',
        'Improved application performance by 40% through optimization',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB']
    },
    {
      title: 'MERN Stack Developer ',
      company: 'Genius Mind Zone, Faisalabad',
      type: 'Full-time',
      description: 'Developed scalable web applications for multiple startup clients using using MERN stack and Next.js.',
      achievements: [
        'Built 2 complete web applications from scratch',
        'Developed mobile-responsive designs for all projects',
        'Maintained 99.9% uptime across all deployed applications'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB']
    },
    {
      title: 'Wordpress and Php Developer',
      company: 'Ask Seo, Faisalabad',
      type: 'Full-time',
      description: 'Developed custom themes and plugins for multiple clients using Wordpress and Php.',
      achievements: [
        'Developed custom themes and plugins for multiple clients using Wordpress and Php.',
        'Maintained 99.9% uptime across all deployed applications',
        'Developed mobile-responsive designs for all projects',
        'Built 2 complete web applications from scratch',
        'Plugins development'
      ],
      technologies: ['Wordpress', 'Php', 'Html', 'Css', 'Javascript', 'plugin development']
    },
    {
      title: 'Laravel and Php Developer',
      company: 'xlogic Solutions, Faisalabad',
      type: 'Full-time',
      description: 'Developed custom themes and plugins for multiple clients using Laravel and Php.',
      achievements: [
        'Developed custom themes and plugins for multiple clients using Laravel and Php.',
        'Maintained 99.9% uptime across all deployed applications',
        'Developed mobile-responsive designs for all projects',
        'Built 3 complete web applications from scratch',
      ],
      technologies: ['Laravel', 'Php', 'Html', 'Css', 'Javascript', 'plugin development']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8 py-15 relative z-10 py-20">
          <div className="grid grid-cols-1 flex justify-center items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                About{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Aqib
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Full-stack developer focused on performance, accessibility, and clean, maintainable code.
              </p>
              <div className="flex flex-wrap gap-4 text-center justify-center">
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Faisalabad, Pakistan
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Available for projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.number}</div>
                  <div className="text-slate-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Work <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-lg font-semibold text-blue-600">{job.company}</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{job.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
              My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Story</span>
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    My journey into the world of technology began during my teenage years when I first discovered the magic of creating something from nothing with just lines of code. What started as curiosity quickly became a passion that has driven my career for over three years.
                  </p>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    I specialize in full-stack development, with a particular love for creating seamless user experiences that solve real-world problems. My approach combines technical expertise with a deep understanding of business needs, ensuring that every project I work on delivers tangible value.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Over the years, I've had the privilege of working with startups, established businesses, and everything in between. Each project has taught me something new and reinforced my belief that great software is built through collaboration, attention to detail, and a genuine desire to help others succeed.
                  </p>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, mentoring aspiring developers, or enjoying a good cup of coffee while planning the next big project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Mobile: card list */}
          <div className="md:hidden grid gap-6">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`m-${index}`}
                  className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Desktop / Tablet: alternating timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={`d-${index}`}
                    className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Technical <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{skillGroup.category}</h3>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">Proficiency</span>
                    <span className="text-sm font-bold text-blue-600">{skillGroup.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skillGroup.percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                <div className="text-4xl">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">F.S.C Pre Engineering</h4>
                  <p className="text-blue-600 font-medium mb-2">Aspire College, Khurrianwala</p>
                  <p className="text-slate-500">2021 - 2023 • 718/1100</p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Bachelor of Computer Science</h4>
                  <p className="text-blue-600 font-medium mb-2">Virtual University Faisalabad</p>
                  <p className="text-slate-500">Continue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Philosophy</span>
          </h2>

          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed italic mb-8">
              "Great software isn't just about clean code—it's about understanding people, solving real problems, and creating experiences that make life better."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              I believe that the best solutions come from truly understanding the problem, collaborating closely with clients,
              and never stopping until we've created something that exceeds expectations. Every line of code I write is
              guided by this principle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Create{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Have a project in mind? I’m accepting new work and collaborations—let’s craft
            something users love and businesses trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;