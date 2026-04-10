'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Linkedin, Github } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const socialLinks = [
    { icon: Github, href: process.env.NEXT_PUBLIC_GITHUB_URL, label: 'GitHub', color: 'hover:text-[#22f2ef]' },
    { icon: Linkedin, href: process.env.NEXT_PUBLIC_LINKEDIN_URL, label: 'LinkedIn', color: 'hover:text-[#22f2ef]' },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-15">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                Let's Work{' '}
                <span className="text-[#22f2ef]">
                  Together
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I'm here to help you build amazing digital solutions
                that drive growth and exceed expectations.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">24h Response Time</span>
                </div>
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">Free Consultation</span>
                </div>
                <div className="px-6 py-3 backdrop-blur-sm rounded-full border border-[#22f2ef] shadow-lg hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20">
                  <span className="text-[#22f2ef] font-semibold">Global Availability</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-10 pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="h-full flex flex-col">
                <div className="p-8 rounded-3xl shadow-xl border border-[#22f2ef]/50 h-full flex flex-col">
                  <h3 className="text-3xl font-bold text-white mb-2">Start Your Project</h3>
                  <p className="text-white mb-8">Tell me about your project and let's discuss how we can work together.</p>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-20 h-20 text-[#22f2ef] mx-auto mb-6" />
                      <h4 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h4>
                      <p className="text-white mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 cursor-pointer border border-[#22f2ef] text-[#22f2ef] font-medium rounded-lg hover:bg-[#22f2ef]/10 transition-colors duration-200"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 text-[#22f2ef] py-3 border border-[#22f2ef]/50 outline-none rounded-lg focus:ring-2 focus:ring-[#22f2ef] focus:border-transparent transition-all duration-200"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 text-[#22f2ef] py-3 border border-[#22f2ef]/50 outline-none rounded-lg focus:ring-2 focus:ring-[#22f2ef] focus:border-transparent transition-all duration-200"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                            Company/Organization
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 text-[#22f2ef] py-3 border border-[#22f2ef]/50 outline-none rounded-lg focus:ring-2 focus:ring-[#22f2ef] focus:border-transparent transition-all duration-200"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 text-[#22f2ef] py-3 border border-[#22f2ef]/50 outline-none rounded-lg focus:ring-2 focus:ring-[#22f2ef] focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select project type</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="ecommerce">E-commerce Platform</option>
                            <option value="saas">SaaS Application</option>
                            <option value="api-development">API Development</option>
                            <option value="consultation">Consultation</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                          Project Description *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 text-[#22f2ef] py-3 border border-[#22f2ef]/50 outline-none rounded-lg focus:ring-2 focus:ring-[#22f2ef] focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Tell me about your project, goals, and any specific requirements..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full cursor-pointer inline-flex border border-[#22f2ef]/50 items-center justify-center px-8 py-4 text-[#22f2ef] font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8 h-full flex flex-col">
                <div className="p-8 rounded-3xl shadow-xl border border-[#22f2ef]/50 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-[#22f2ef]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#22f2ef]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-[#22f2ef] font-medium">{process.env.NEXT_PUBLIC_EMAIL}</p>
                        <p className="text-white text-sm">I typically respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-[#22f2ef]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#22f2ef]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-[#22f2ef] font-medium">{process.env.NEXT_PUBLIC_PHONE}</p>
                        <p className="text-white text-sm">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-[#22f2ef]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#22f2ef]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                        <p className="text-[#22f2ef] font-medium">Faisalabad, Pakistan</p>
                        <p className="text-white text-sm">Available for remote work worldwide</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-[#22f2ef]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#22f2ef]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Availability</h4>
                        <p className="text-[#22f2ef] font-medium">Currently Available</p>
                        <p className="text-white text-sm">Taking on new projects</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            aria-label={social.label}
                            className={`w-12 h-12 border border-[#22f2ef]/50 rounded-lg flex items-center justify-center text-[#22f2ef] ${social.color} transition-all duration-300 transform hover:scale-110`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Ready to Start <span className="text-[#22f2ef]">Your Project?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your ideas and create something amazing together. I'm excited to help bring your vision to life.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="inline-flex items-center text-center justify-center px-8 py-4 text-[#22f2ef] font-bold rounded-xl border border-[#22f2ef]/50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lg hover:shadow-[#22f2ef]/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Contact;