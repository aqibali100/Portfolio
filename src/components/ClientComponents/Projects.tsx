'use client';

import React, { useState } from 'react';
import { ExternalLink, Users, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '../AnimatedSection';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    stack: string;
    liveUrl: string;
    teamSize: string;
    status: string;
    featured: boolean;
  }

  const projects: Project[] = [
    {
      id: 'neurochatai',
      title: 'NeuroChat-AI',
      shortDescription: 'NeuroChat is an AI-powered chat platform designed to help users with coding, writing, analysis, problem-solving, and creative brainstorming.',
      description: '',
      image: '/images/NeuroChat.png',
      technologies: ['Html', 'CSS', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'OpenAI API', 'Frammer Motion'],
      liveUrl: 'https://neurochat-ai.vercel.app',
      category: 'Next.js, Node Js',
      stack: 'Next.js, Node.js',
      teamSize: '1 developer',
      status: 'Live',
      featured: true,
    },
    {
      id: 'linkedinsaver',
      title: 'LinkedinSaver',
      shortDescription: 'LinkedinSaver is a free LinkedIn media downloader that helps users save public LinkedIn videos, images, carousels, and media posts for offline viewing.',
      description: '',
      image: '/images/linkedinsaver.png',
      technologies: ['Html', 'CSS', 'JavaScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'API Integration', 'Frammer Motion'],
      liveUrl: 'https://linkedin-saver-site.vercel.app',
      category: 'Next.js, Node Js',
      stack: 'Next.js, Node.js',
      teamSize: '1 developer',
      status: 'Live',
      featured: false,
    },
    {
      id: 'edutrainingcenter',
      title: 'Edu Training Center',
      shortDescription: 'The website EDU Training Centre belongs to EDU Training Centre Ltd, a UK-based training institute that provides professional courses in the security industry.',
      description: '',
      image: '/images/edutraining.png',
      technologies: ['Html', 'CSS', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://www.edutraining.co.uk',
      category: 'Next.js',
      stack: 'Next.js',
      teamSize: '2 developers',
      status: 'Live',
      featured: true,
    },
    {
      id: 'globalprimeautos',
      title: 'GlobalPrimeAutos',
      shortDescription: 'A car dealership website built with Wordpress and Php. It features car listings, search functionality, and contact forms.',
      description: '',
      image: '/images/globalprimeautos.png',
      technologies: ['Html', 'CSS', 'JavaScript', 'Php', 'Wordpress', 'MySQL'],
      category: 'Wordpress',
      stack: 'Wordpress',
      liveUrl: 'https://globalprimeautos.com/',
      teamSize: '2 developers',
      status: 'Live',
      featured: false,
    },
    {
      id: 'online-text-tools',
      title: 'OnlineTextTools',
      shortDescription: 'A tools website for online text editing and formatting, built with Laravel and Php. You can edit and format text online.',
      description: '',
      image: '/images/OnlineTextTools.jpeg',
      technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
      category: 'Laravel',
      stack: 'Laravel',
      liveUrl: 'https://onlinetexttools.io',
      teamSize: '3 developers',
      status: 'Live',
      featured: false,
    },
    {
      id: 'ak-boys-hostel',
      title: 'Ak Boys Hostel',
      shortDescription: 'A Website for managing hostel rooms, built with MongoDB, Node Js, React Js and Php. You can manage hostel management system online.',
      description: '',
      image: '/images/ak-boys-hostel.jpeg',
      technologies: ['MongoDB', 'Node Js', 'React Js', 'Html', 'CSS', 'JavaScript'],
      category: 'Node Js',
      stack: 'Node Js',
      liveUrl: 'https://www.akboyshostel.store',
      teamSize: '1 developers',
      status: 'Live',
      featured: false,
    },
    {
      id: 'buyurduthemes',
      title: 'Buy Urdu Themes',
      shortDescription: 'Buy Urdu Themes is an online marketplace for Urdu and English website themes, templates, logos, brochures, menus, business cards, and creative design assets.',
      description: '',
      image: '/images/buyurdutheme.png',
      technologies: ['Html', 'CSS', 'JavaScript', 'WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL'],
      category: 'WordPress',
      stack: 'WordPress',
      liveUrl: 'https://buyurduthemes.com',
      teamSize: '1 developer',
      status: 'Live',
      featured: false,
    },
  ];

  const categories = ['all', 'Laravel', 'Next.js', 'React', 'Node Js', 'Wordpress'];

  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

  const tagsFor = (project: Project) => {
    const parts: string[] = [];
    if (project.category) parts.push(...project.category.split(',').map(p => p.trim()));
    if (project.stack) parts.push(...project.stack.split(',').map(p => p.trim()));
    if (project.technologies) parts.push(...project.technologies.map(t => t.trim()));
    return parts.map(normalize);
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter !== 'all') {
      const activeNorm = normalize(activeFilter);
      const tags = tagsFor(project);
      if (!tags.includes(activeNorm)) return false;
    }

    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-15 pb-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                My{' '}
                <span className="text-[#22f2ef]">
                  Projects
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                Showcasing my best work with MERN, Next.js, and Laravel
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">7+ Projects</span>
                </div>
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">Multiple Tech Stacks</span>
                </div>
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">Production Ready</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Featured <span className="text-[#22f2ef]">Projects</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <div key={project.id} className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#22f2ef]/50">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50 backdrop-blur-sm">
                        Featured
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 bg-[#22f2ef]/50 backdrop-blur-sm rounded-full transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50 backdrop-blur-sm">
                        {project.stack}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#22f2ef] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white mb-6 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-[#22f2ef] text-slate-700 text-sm font-medium rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-white">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.teamSize}
                        </div>
                      </div>

                      <Link
                        href={'projects/' + project.id}
                        className="inline-flex items-center text-[#22f2ef] font-medium hover:text-[#22f2ef]/80 transition-colors duration-200"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              All <span className="text-[#22f2ef]">Projects</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#22f2ef] w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-[#22f2ef] outline-none border border-[#22f2ef]/50 rounded-lg focus:ring-2 focus:ring-[#22f2ef] focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <AnimatedSection key={category}>
                  <button
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 cursor-pointer rounded-lg font-medium transition-all duration-200 ${activeFilter === category
                      ? 'bg-[#22f2ef] text-black shadow-lg'
                      : 'text-[#22f2ef] hover:bg-[#22f2ef]/10 hover:text-[#22f2ef] border border-[#22f2ef]/50'
                      }`}
                  >
                    {category === 'all' ? 'All Projects' : category}
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id}>
                <div
                  className="group rounded-2xl border border-[#22f2ef]/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 backdrop-blur-sm text-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 bg-[#22f2ef]/50 backdrop-blur-sm rounded-full hover:bg-[#22f2ef] transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-700" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-[#22f2ef] text-sm font-medium rounded-full border border-[#22f2ef]/50">
                        {project.stack}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === 'Live'
                        ? 'text-[#22f2ef] bg-[#22f2ef]/20 border border-[#22f2ef]/50'
                        : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22f2ef] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-[#22f2ef] text-xs font-medium rounded-full border border-[#22f2ef]/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-black bg-[#22f2ef] text-xs font-medium rounded-full border border-[#22f2ef]/50">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white">
                        {project.teamSize}
                      </div>

                      <Link
                        href={'/projects/' + project.id}
                        className="inline-flex items-center text-[#22f2ef] font-medium hover:text-[#22f2ef]/80 transition-colors duration-200"
                      >
                        Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 border border-[#22f2ef]/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#22f2ef] mb-4">No Projects Found</h3>
              <p className="text-white mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="inline-flex cursor-pointer items-center px-6 py-3 text-white font-medium rounded-lg border border-[#22f2ef]/50 hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Like What You <span className="text-[#22f2ef]">See?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to work on new projects and bring innovative ideas to life.
              Let's discuss how we can work together on your next project.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedSection>
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
        </div>
      </section>

    </div>
  );
};

export default Projects;