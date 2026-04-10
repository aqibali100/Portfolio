'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

    const pathname = usePathname();

    const isActive = (href: string) => {
        if (!pathname) return false;
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-2xl font-bold text-white transition-colors duration-300">
                                CodeWithAqib
                            </a>
                        </div>

                        <nav className="hidden md:flex items-center">
                            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-2 py-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${isActive(link.href) ? 'bg-white/20 text-white shadow' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        <div className="hidden md:flex items-center">
                            <Link
                                href={'/Aqib-Ali.pdf'}
                                target="_blank"
                                download='Aqib-Ali'
                                rel="noopener noreferrer"
                                className="group/link relative overflow-hidden inline-flex items-center justify-center px-6 py-3 border border-[#22f2ef]/50 text-white font-bold rounded-xl hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20"
                            >
                                <span className="flex items-center">
                                    <Download className="w-4 h-4 mr-2" />
                                    Resume
                                </span>
                            </Link>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex cursor-pointer items-center justify-center p-2 rounded-lg text-white hover:text-blue-300 hover:bg-white/5 transition-colors duration-200"
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
                    className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                ></div>

                <div
                    className={`absolute top-0 left-0 h-full w-80 bg-white/5 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex items-center cursor-pointer justify-between p-3 border-b border-transparent">
                        <div className="text-xl font-bold text-white">
                            CodeWithAqib
                        </div>
                        <button
                            onClick={closeMobileMenu}
                            className="p-2 rounded-lg text-white hover:text-blue-300 hover:bg-white/5 transition-colors duration-200"
                        >
                            <X className="w-6 h-6 cursor-pointer" />
                        </button>
                    </div>

                    <nav className="flex-1 px-3 py-4">
                        <div className="inline-flex flex-col space-y-2">
                            {navLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className={`flex items-center px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${active ? 'bg-white/20 text-white shadow' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                            animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <IconComponent className={`w-5 h-5 mr-3 transition-colors duration-200 ${active ? 'text-white' : 'text-white/80'}`} />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    <div className="p-6 border-t border-transparent">
                        <Link href="/Aqib-Ali.pdf" download='Aqib-Ali'>
                            <button
                                className="group w-full inline-flex relative overflow-hidden border border-[#22f2ef]/50 items-center justify-center px-2 py-3 text-white font-medium rounded-lg transform hover:scale-105 transition-all hover:bg-[#22f2ef]/10 duration-200 shadow-md hover:shadow-lg hover:shadow-[#22f2ef]/20"
                                onClick={closeMobileMenu}
                            >
                                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#22f2ef] via-[#49dc7a] to-[#8b5cf6] opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-300 pointer-events-none" />
                                <span className="relative z-10 inline-flex items-center">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Resume
                                </span>
                            </button>
                        </Link>

                        <div className="mt-4 text-center text-sm text-white/70">
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