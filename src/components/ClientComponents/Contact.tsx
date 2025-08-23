'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle, Calendar, Globe, Linkedin, Github, Twitter } from 'lucide-react';

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
    { icon: Github, href: 'https://github.com/aqibali100', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aqib-ali-735633290/', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-15">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let's Work{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm here to help you build amazing digital solutions
              that drive growth and exceed expectations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
                <span className="text-blue-600 font-semibold">24h Response Time</span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg">
                <span className="text-green-600 font-semibold">Free Consultation</span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg">
                <span className="text-purple-600 font-semibold">Global Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Start Your Project</h3>
                <p className="text-slate-600 mb-8">Tell me about your project and let's discuss how we can work together.</p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h4>
                    <p className="text-slate-600 mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full cursor-pointer inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Email</h4>
                      <p className="text-blue-600 font-medium">aqib28000@gmail.com</p>
                      <p className="text-slate-500 text-sm">I typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Phone</h4>
                      <p className="text-green-600 font-medium">+92 327-8551518</p>
                      <p className="text-slate-500 text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Location</h4>
                      <p className="text-purple-600 font-medium">Faisalabad, Pakistan</p>
                      <p className="text-slate-500 text-sm">Available for remote work worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Availability</h4>
                      <p className="text-green-600 font-medium">Currently Available</p>
                      <p className="text-slate-500 text-sm">Taking on new projects</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 ${social.color} transition-all duration-300 transform hover:scale-110`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Project?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your ideas and create something amazing together. I'm excited to help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:aqib28000@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;