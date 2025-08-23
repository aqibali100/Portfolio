'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: User },
        { name: 'Skills', href: '/skills', icon: Code },
        { name: 'Projects', href: '/projects', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: Mail },
    ];

    const GetCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a
                                href="/"
                                className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-600 bg-clip-text text-transparent hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                            >
                                CodeWithAqib
                            </a>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center">
                            <Link href="/Aqib-Ali.pdf" download='Aqib-Ali'>
                                <button className="inline-flex cursor-pointer items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                                    <Download className="w-4 h-4 mr-2" />
                                    Resume
                                </button>
                            </Link>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex cursor-pointer items-center justify-center p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors duration-200"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                ></div>

                <div
                    className={`absolute top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex items-center cursor-pointer justify-between p-2 border-b border-slate-200">
                        <div className="text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                            CodeWithAqib
                        </div>
                        <button
                            onClick={closeMobileMenu}
                            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200"
                        >
                            <X className="w-6 h-6 cursor-pointer" />
                        </button>
                    </div>

                    <nav className="flex-1 px-2 py-2 space-y-2">
                        {navLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                                    }}
                                >
                                    <IconComponent className="w-5 h-5 mr-3 group-hover:text-blue-600 transition-colors duration-200" />
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="p-6 border-t border-slate-200">
                        <Link href="/Aqib-Ali.pdf" download='Aqib-Ali'>
                            <button
                                className="w-full cursor-pointer inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                                onClick={closeMobileMenu}
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download Resume
                            </button>
                        </Link>

                        <div className="mt-4 text-center text-sm text-slate-500">
                            © {GetCurrentYear()} CodeWithAqib
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </>
    );
};

export default Header;