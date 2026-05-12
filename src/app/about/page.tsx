import React from 'react';
import { Calendar, MapPin, Award, Users, Coffee, Clock, ArrowRight, Code, Lightbulb, Target, Heart, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

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
    },
    {
      year: '2026',
      title: 'Full Stack Web Developer',
      description: 'Evolved into a full-stack developer, delivering end-to-end solutions for clients across various industries.',
      icon: Code
    }
  ];

  const achievements = [
    { icon: Award, number: '7+', label: 'Projects Completed' },
    { icon: Users, number: '10+', label: 'Happy Clients' },
    { icon: Coffee, number: '30+', label: 'Cups of Coffee' },
    { icon: Clock, number: '2+', label: 'Years Experience' }
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
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I stay ahead by constantly learning new skills.',
    },
    {
      title: 'Client Success',
      description: 'Your success is my success. I\'m committed to delivering solutions that drive results.',
    },
    {
      title: 'Innovation',
      description: 'I love exploring new technologies and finding creative solutions to complex problems.',
    }
  ];

  const workExperience = [
    {
      title: 'Laravel and Php Developer',
      company: 'XLogic Solutions, Faisalabad',
      type: 'Full-time',
      description: 'Developed custom themes and plugins for multiple clients using Laravel and Php.',
      achievements: [
        'Developed custom themes and plugins for multiple clients using Laravel and Php.',
        'Maintained 99.9% uptime across all deployed applications',
        'Developed mobile-responsive designs for all projects',
        'Built 3 complete web applications from scratch',
      ],
      technologies: ['Laravel', 'Php', 'Html', 'Css', 'Javascript', 'plugin development']
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
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-15 pb-16 relative overflow-hidden">
        <div className="max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8 py-15 relative z-10 py-20">
          <div className="grid grid-cols-1 flex justify-center items-center">
            <div>
              <AnimatedSection>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                  About{' '}
                  <span className="text-[#22f2ef]">
                    Aqib
                  </span>
                  <br />
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                  Full-stack developer focused on performance, accessibility, and <br></br> clean, maintainable code.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex flex-wrap gap-4 text-center justify-center">
                  <div className="flex items-center text-white">
                    <MapPin className="w-5 h-5 mr-2 text-[#22f2ef]" />
                    Faisalabad, Pakistan
                  </div>
                  <div className="flex items-center text-white">
                    <Calendar className="w-5 h-5 mr-2 text-[#22f2ef]" />
                    Available for projects
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center group">
                    <div className={`w-20 h-20 rounded-2xl border border-[#22f2ef]/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                    <div className="text-white font-medium">{achievement.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight text-center">
              Work <span className="text-[#22f2ef]">Experience</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-12 mt-20">
            {workExperience.map((job, index) => (
              <AnimatedSection key={index}>
                <div className="rounded-2xl p-8 border border-[#22f2ef]/50">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-lg font-semibold text-[#22f2ef]">{job.company}</span>
                        <span className="px-3 py-1 border border-[#22f2ef]/50 text-[#22f2ef] text-sm font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white mb-6 leading-relaxed">{job.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-[#22f2ef] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-white">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 text-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight text-center">
                My <span className="text-[#22f2ef]">Story</span>
              </h2>
            </AnimatedSection>

            <div className="prose prose-lg max-w-none py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <AnimatedSection delay={0.1}>
                    <p className="text-lg text-white leading-relaxed">
                      My journey into the world of technology began during my teenage years when I first discovered the magic of creating something from nothing with just lines of code. What started as curiosity quickly became a passion that has driven my career for over three years.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2}>
                    <p className="text-lg text-white leading-relaxed">
                      I specialize in full-stack development, with a particular love for creating seamless user experiences that solve real-world problems. My approach combines technical expertise with a deep understanding of business needs, ensuring that every project I work on delivers tangible value.
                    </p>
                  </AnimatedSection>
                </div>

                <div className="space-y-6">
                  <AnimatedSection delay={0.3}>
                    <p className="text-lg text-white leading-relaxed">
                      Over the years, I've had the privilege of working with startups, established businesses, and everything in between. Each project has taught me something new and reinforced my belief that great software is built through collaboration, attention to detail, and a genuine desire to help others succeed.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection delay={0.4}>
                    <p className="text-lg text-white leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, mentoring aspiring developers, or enjoying a good cup of coffee while planning the next big project.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 leading-tight text-center">
              My <span className="text-[#22f2ef]">Journey</span>
            </h2>
          </AnimatedSection>

          {/* Mobile: card list */}
          <div className="md:hidden grid gap-6">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={`m-${index}`}>
                  <div
                    className="p-5 rounded-2xl shadow-lg border border-[#22f2ef]/50 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 border border-[#22f2ef]/50 rounded-full flex items-center justify-center shadow-md">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-[#22f2ef] border border-[#22f2ef]/50 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Desktop / Tablet: alternating timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-[#22f2ef] rounded-full" />
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isLeft = index % 2 === 0;
                return (
                  <AnimatedSection key={`d-${index}`}>
                    <div
                      className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
                        <div className="p-6 rounded-2xl shadow-lg border border-[#22f2ef]/50 hover:shadow-xl transition-shadow duration-300">
                          <div className="text-2xl font-bold text-[#22f2ef] mb-2">{item.year}</div>
                          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-white leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      <div className="relative z-10 w-16 h-16 border border-[#22f2ef]/50 bg-[#22f2ef] rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <div className="w-1/2" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 leading-tight text-center">
              Technical <span className="text-[#22f2ef]">Expertise</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="border border-[#22f2ef]/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white">Proficiency</span>
                      <span className="text-sm font-bold text-[#22f2ef]">{skillGroup.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-[#22f2ef] h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skillGroup.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 leading-tight text-center">
              My <span className="text-[#22f2ef]">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-6 p-8 rounded-2xl border border-[#22f2ef]/50 hover:shadow-xl transition-shadow duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-white leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 leading-tight text-center">
              My <span className="text-[#22f2ef]">Education</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.1}>
              <div>
                <div className="space-y-6">
                  <div className="border border-[#22f2ef]/50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">F.S.C Pre Engineering</h4>
                    <p className="text-[#22f2ef] font-medium mb-2">Aspire College, Khurrianwala</p>
                    <p className="text-white">2021 - 2023 • 718/1100</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <div className="space-y-6">
                  <div className="border border-[#22f2ef]/50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">Bachelor of Computer Science</h4>
                    <p className="text-[#22f2ef] font-medium mb-2">Virtual University Faisalabad</p>
                    <p className="text-white">Continue</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 leading-tight text-center">
              My <span className="text-[#22f2ef]">Philosophy</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="p-12 rounded-3xl shadow-xl border border-[#22f2ef]/50">
              <blockquote className="text-2xl md:text-3xl font-medium text-[#22f2ef] leading-relaxed italic mb-8">
                "Great software isn't just about clean code—it's about understanding people, solving real problems, and creating experiences that make life better."
              </blockquote>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-lg text-white leading-relaxed">
                I believe that the best solutions come from truly understanding the problem, collaborating closely with clients,
                and never stopping until we've created something that exceeds expectations. Every line of code I write is
                guided by this principle.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight text-center">
              Let’s Create <span className="text-[#22f2ef]">Real Impact</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I’m accepting new work and collaborations—let’s craft
              something users love and businesses trust.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={'/contact'}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative overflow-hidden inline-flex items-center justify-center px-6 py-3 border border-[#22f2ef]/50 text-white font-bold rounded-xl hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20"
              >
                <span className="flex items-center">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default About;