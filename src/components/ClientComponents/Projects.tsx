'use client';

import React, { useState } from 'react';
import { ExternalLink, Users, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 'online-text-tools',
      title: 'OnlineTextTools',
      shortDescription: 'A tools website for online text editing and formatting, built with Laravel and Php. You can edit and format text online.',
      description: '',
      image: '/images/OnlineTextTools.jpeg',
      technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
      category: 'Laravel',
      stack: 'Laravel',
      liveUrl: 'https://onlinetexttools.net/',
      teamSize: '3 developers',
      status: 'Live',
      featured: true,
    },
    {
      id: 'static-qr-code',
      title: 'Static QR Code',
      shortDescription: 'A static QR code generator built with Laravel and Php. You can generate QR codes for various purposes.',
      description: '',
      image: '/images/static-qr-code.jpeg',
      technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
      category: 'Laravel',
      stack: 'Laravel',
      liveUrl: 'https://static-qr-code.com/',
      teamSize: '3 developers',
      status: 'Live',
      featured: true,
    },
    {
      id: 'easyconvertkit',
      title: 'EasyConvertKit',
      shortDescription: 'A website for online converting files, built with Laravel and Php. You can convert files online like pdf to doc, doc to pdf, etc.',
      description: '',
      image: '/images/easyconvertkit.jpeg',
      technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
      category: 'Laravel',
      stack: 'Laravel',
      liveUrl: 'https://easyconvertkit.com/',
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
      liveUrl: 'https://www.akboyshostel.online/',
      teamSize: '1 developers',
      status: 'Live',
      featured: false,
    },
    {
      id: 'glow-girls',
      title: 'Glow Girls',
      shortDescription: 'A wordpress woocommerce website for selling beauty products, built with Wordpress and Php. You can sell beauty products online.',
      description: '',
      image: '/images/glow-girls.jpeg',
      technologies: ['Wordpress', 'Php', 'Html', 'CSS', 'JavaScript', 'WooCommerce'],
      category: 'Wordpress',
      stack: 'Wordpress',
      liveUrl: 'https://glowgirls.site/',
      teamSize: '1 developers',
      status: 'Live',
      featured: false,
    },
  ];

  const categories = ['all', 'Laravel', 'Next.js', 'React', 'Node Js', 'Wordpress'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Showcasing my best work with MERN, Next.js, and Laravel
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
                <span className="text-blue-600 font-semibold">7+ Projects</span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg">
                <span className="text-green-600 font-semibold">Multiple Tech Stacks</span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg">
                <span className="text-purple-600 font-semibold">Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-700" />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {project.stack}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.teamSize}
                      </div>
                    </div>

                    <Link
                      href={'projects/' + project.id}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            All <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 cursor-pointer rounded-lg font-medium transition-all duration-200 ${activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                    }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {project.stack}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === 'Live'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                      }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      {project.teamSize}
                    </div>

                    <Link
                      href={'/projects/' + project.id}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No Projects Found</h3>
              <p className="text-slate-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="inline-flex cursor-pointer items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Like What You <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">See?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            I'm always excited to work on new projects and bring innovative ideas to life.
            Let's discuss how we can work together on your next project.
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

export default Projects;