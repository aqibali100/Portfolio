'use client';

import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';


const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-30">
                <div className="mb-5">
                    <div className="relative inline-block">
                        <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                            404
                        </h1>
                        <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-slate-200 -z-10 transform translate-x-2 translate-y-2">
                            404
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        The page you are looking for could not be found.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/"
                        className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center cursor-pointer px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;