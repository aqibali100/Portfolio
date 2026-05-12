import { ArrowRight, Cloud, Code, Database, Mail, Phone, Quote, Star } from "lucide-react";
import Link from "next/link";
import CategoryMarquee from "../CategoryMarquee";
import AnimatedSection from "../AnimatedSection";

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Custom web applications built with React, Next.js, Php, Wordpress and modern frameworks like Laravel for optimal performance.',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
        icon: Database,
        title: 'Api Development',
        description: 'Scalable server-side solutions with Node.js, Next.js, laravel and robust database architectures.',
        features: ['API Development', 'Database Design', 'Security First']
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Deploy and scale applications on AWS, Google Cloud, and Azure with automatic scaling and best practices.',
        features: ['Auto Scaling', 'CI/CD Pipeline', 'Monitoring']
    },
];

const projects = [
    {
        id: 'edutrainingcenter',
        title: 'Edu Training Center',
        description: 'The website EDU Training Centre belongs to EDU Training Centre Ltd, a UK-based training institute that provides professional courses in the security industry.',
        image: '/images/edutraining.png',
        technologies: ['Html', 'CSS', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        liveUrl: 'https://www.edutraining.co.uk',
        category: 'Next.js'
    },
    {
        id: 'globalprimeautos',
        title: 'Global Prime Autos',
        description: 'A car dealership website built with Wordpress and Php. It features car listings, search functionality, and contact forms.',
        image: '/images/globalprimeautos.png',
        technologies: ['Html', 'CSS', 'JavaScript', 'Php', 'Wordpress', 'MySQL'],
        liveUrl: 'https://globalprimeautos.com',
        category: 'Wordpress'
    },
    {
        id: 'online-text-tools',
        title: 'Online Text Tools',
        description: 'A tools website for online text editing and formatting, built with Laravel and Php. You can edit and format text online.',
        image: '/images/OnlineTextTools.jpeg',
        technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
        liveUrl: 'https://onlinetexttools.io',
        category: 'Laravel'
    },
];

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart Inc.',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content:
            'Aqib built a high-performing e-commerce platform using MERN and Laravel that exceeded our expectations. The blend of clean architecture and flawless execution was impressive.',
        rating: 5,
        project: 'E-commerce Platform'
    },
    {
        name: 'Michael Chen',
        role: 'CTO, InnovateLab',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content:
            'Partnering with Aqib was transformative. His expertise in Next.js and Node.js delivered a scalable SaaS solution capable of handling thousands of users effortlessly. We are thrilled with the results.',
        rating: 5,
        project: 'SaaS Application'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Marketing Director, GrowthCo',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content:
            'Aqib’s mobile-first approach and seamless API integration boosted our engagement by 300%. His understanding of React and backend systems is outstanding. We are thrilled with the results.',
        rating: 5,
        project: 'Mobile Application'
    },
];

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="flex items-center justify-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-35 pt-30">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                            <AnimatedSection className="text-center">
                                Hi, I'm{' '}
                                <span className="text-[#22f2ef]">
                                    Aqib
                                </span>
                            </AnimatedSection>

                            <AnimatedSection className="text-center" delay={0.1}>
                                <span className="text-4xl md:text-6xl"> Full Stack Developer</span>
                            </AnimatedSection>
                        </h1>

                        <AnimatedSection delay={0.2}>
                            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                                Web solutions with MERN, NEXT JS, LARAVEL and cloud technologies.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={'/projects'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative overflow-hidden inline-flex items-center justify-center px-6 py-3 border border-[#22f2ef]/50 text-white font-bold rounded-xl hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20"
                                >
                                    <span className="flex items-center">
                                        View My Work
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 pt-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                            My <span className="text-[#22f2ef]">Services</span>
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection className="text-center mb-15" delay={0.1}>
                        <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                            Scalable web experiences from concept to launch.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-12">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <AnimatedSection key={index} >
                                    <div className="group">
                                        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                                            {/* Icon and Title Side */}
                                            <div className="lg:w-1/4    ">
                                                <div className="relative">
                                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#22f2ef] via-[#49dc7a] to-[#8b5cf6] rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"></div>
                                                    <div className="relative rounded-2xl p-4 border border-[#22f2ef]/50 group-hover:border-[#22f2ef]/50 transition-all duration-300">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-[#22f2ef] to-[#49dc7a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#22f2ef]/20">
                                                            <IconComponent className="w-8 h-8 text-white" />
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#22f2ef] transition-colors duration-300">
                                                            {service.title}
                                                        </h3>
                                                        <div className="w-12 h-1 bg-gradient-to-r from-[#22f2ef] to-[#49dc7a] rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Side */}
                                            <div className="lg:w-2/3">
                                                <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                                                    {service.description}
                                                </p>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    {service.features.map((feature, featureIndex) => (
                                                        <div
                                                            key={featureIndex}
                                                            className="flex items-start p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl group-hover:border-[#22f2ef]/30 transition-all duration-300 hover:translate-y-1"
                                                        >
                                                            <div className="w-2 h-2 bg-gradient-to-r from-[#22f2ef] to-[#49dc7a] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                            <span className="text-sm md:text-base font-medium text-gray-200">
                                                                {feature}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technologies section */}
            <section className="py-20 pt-5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="text-center md:text-left">
                        <AnimatedSection className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                Technologies <span className="text-[#22f2ef]"> I Master</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection className="text-center" delay={0.1}>
                            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                                Leveraging modern tools and frameworks to craft innovative, <br></br> high-performing solutions.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>

                <AnimatedSection>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <CategoryMarquee />
                    </div>
                </AnimatedSection>
            </section>

            {/* Projects section */}
            <section id="projects" className="py-20 pt-5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <AnimatedSection className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                Latest<span className="text-[#22f2ef]"> Projects</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                                Showcasing my recent work with cutting-edge technologies
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="space-y-24">
                        {projects.map((project, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <AnimatedSection key={index}>
                                    <div
                                        className="group relative"
                                        style={{
                                            animation: `slideIn 0.8s ease-out ${index * 0.2}s both`
                                        }}
                                    >
                                        <style>{`
                                        @keyframes slideIn {
                                            from {
                                                opacity: 0;
                                                transform: translateY(40px);
                                            }
                                            to {
                                                opacity: 1;
                                                transform: translateY(0);
                                            }
                                        }
                                    `}</style>

                                        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                                            {/* Image Container */}
                                            <div className="w-full lg:w-1/2">
                                                <div className="relative overflow-hidden rounded-3xl">
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#22f2ef] via-[#49dc7a] to-[#8b5cf6] rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 group-hover:blur-xl"></div>
                                                    <div className="relative overflow-hidden rounded-3xl border border-[#83878d]/30 group-hover:border-[#22f2ef]/50 transition-all duration-300">
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                        {/* Project Number Badge */}
                                                        <div className="absolute top-6 left-6">
                                                            <span className="px-4 py-2 bg-gradient-to-r from-[#22f2ef] to-[#49dc7a] text-slate-900 text-lg font-bold rounded-xl backdrop-blur-sm">
                                                                {String(index + 1).padStart(2, '0')}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Container */}
                                            <div className="w-full lg:w-1/2 space-y-6">
                                                {/* Category Badge */}
                                                <div>
                                                    <span className="px-4 py-2 bg-gradient-to-r from-[#22f2ef]/20 to-[#49dc7a]/20 text-[#22f2ef] text-sm font-semibold rounded-full border border-[#22f2ef]/30 backdrop-blur-sm inline-block group-hover:from-[#22f2ef]/30 group-hover:to-[#49dc7a]/30 transition-all duration-300">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <div>
                                                    <h3 className="text-4xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#22f2ef] transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <div className="w-16 h-1 bg-gradient-to-r from-[#22f2ef] to-[#49dc7a] rounded-full group-hover:w-32 transition-all duration-300"></div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                                                    {project.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-3 pt-4">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-4 py-2 bg-gradient-to-r from-[#22f2ef]/10 to-[#49dc7a]/10 text-[#22f2ef] text-sm font-semibold rounded-lg border border-[#22f2ef]/20 group-hover:from-[#22f2ef]/20 group-hover:to-[#49dc7a]/20 group-hover:border-[#22f2ef]/40 transition-all duration-300 backdrop-blur-sm"
                                                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                                    <Link
                                                        href={`/projects/${project.id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/link relative overflow-hidden inline-flex items-center justify-center px-6 py-3 border border-[#22f2ef]/50 text-white font-bold rounded-xl hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20"
                                                    >
                                                        <span className="flex items-center">
                                                            View Details
                                                            <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative line */}
                                        {index !== projects.length - 1 && (
                                            <div className="h-px bg-gradient-to-r from-transparent via-[#22f2ef]/20 to-transparent mt-24"></div>
                                        )}
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 pt-5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <AnimatedSection className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                What Clients<span className="text-[#22f2ef]"> Say</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                                Real feedback from amazing clients and partners
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <AnimatedSection key={index} delay={index * 0.2}>
                                <div
                                    className="group relative h-full overflow-hidden rounded-2xl"
                                >
                                    {/* Card Container */}
                                    <div className="relative h-full bg-slate-900/20 rounded-2xl overflow-hidden flex flex-col backdrop-blur-xl border border-white/10 p-7 md:p-8">
                                        {/* Header with Quote Icon and Stars */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#22f2ef] to-[#49dc7a] rounded-xl flex items-center justify-center shadow-lg shadow-[#22f2ef]/20 group-hover:scale-110 transition-transform duration-300">
                                                <Quote className="w-6 h-6 text-slate-900" />
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Badge */}
                                        <div className="mb-4">
                                            <span className="px-3 py-1 bg-gradient-to-r from-[#22f2ef]/10 to-[#49dc7a]/10 text-[#22f2ef] text-xs font-bold rounded-full border border-[#22f2ef]/30 backdrop-blur-sm">
                                                {testimonial.project}
                                            </span>
                                        </div>

                                        {/* Testimonial Content */}
                                        <p className="text-gray-200 text-sm leading-relaxed mb-6 flex-grow italic group-hover:text-white transition-colors duration-300">
                                            "{testimonial.content}"
                                        </p>

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-[#22f2ef]/30 to-transparent mb-5"></div>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-[#22f2ef] to-[#49dc7a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="relative w-14 h-14 rounded-full object-cover border border-white/20"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm group-hover:text-[#22f2ef] transition-colors duration-300">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 pointer-events-none"></div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 pt-5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">

                            <AnimatedSection>
                                Ready to Build Something
                            </AnimatedSection>

                            <AnimatedSection delay={0.1}>
                                <span className="text-[#22f2ef]">   Extraordinary Together?</span>
                            </AnimatedSection>

                        </h2>

                        <AnimatedSection delay={0.2}>
                            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                                Let’s bring your vision to life. I craft digital products that drive growth, inspire users, and deliver results.
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <AnimatedSection delay={0.3}>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
                                    <p className="text-blue-100 mb-3">Get a response within 24 hours</p>
                                    <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-[#22f2ef] font-medium transition-colors duration-200">
                                        {process.env.NEXT_PUBLIC_EMAIL}
                                    </a>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.4}>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
                                    <p className="text-blue-100 mb-3">Available Mon-Fri, 9AM-6PM</p>
                                    <a href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, '')}`} className="text-[#22f2ef] font-medium transition-colors duration-200">
                                        {process.env.NEXT_PUBLIC_PHONE}
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
