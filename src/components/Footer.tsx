'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Particles from './Particles';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            const halfway = document.documentElement.scrollHeight / 2;
            setIsVisible(window.scrollY > halfway);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/aqibali100', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/aqib-ali-735633290/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:aqib28000@gmail.com', label: 'Email' }
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    const services = [
        'Cloud Solutions',
        'Web Development',
        'Backend Development',
        'E-commerce Solutions',
        'Wordpress Development',
    ];

    return (
        <footer className="bg-slate-900 text-white relative">
            <Particles />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                CodeWithAqib
                            </h3>
                            <p className="text-slate-400 mt-4 text-lg leading-relaxed max-w-md">
                                Passionate full-stack developer creating digital solutions that drive business growth.
                                Let's build something amazing together.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        aria-label={social.label}
                                        className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                                        <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="flex items-center text-slate-400 mb-4 md:mb-0">
                            <span>© {currentYear} CodeWithAqib. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed cursor-pointer bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 mx-auto" />
                </button>
            )}
        </footer>
    );
};

export default Footer;