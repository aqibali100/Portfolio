import { ArrowRight, Cloud, Code, Database, ExternalLink, Github, Globe, Mail, Phone, Quote, Sparkles, Star, Zap } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Custom web applications built with React, Next.js, Php, Wordpress and modern frameworks like Laravel for optimal performance.',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
        icon: Database,
        title: 'Backend Development',
        description: 'Scalable server-side solutions with Node.js, Next.js, laravel and robust database architectures.',
        features: ['API Development', 'Database Design', 'Security First']
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Deploy and scale applications on AWS, Google Cloud, and Azure with automatic scaling and best practices.',
        features: ['Auto Scaling', 'CI/CD Pipeline', 'Monitoring']
    },
    {
        icon: Globe,
        title: 'E-commerce Solutions',
        description: 'Complete online stores with payment integration, inventory management, and analytics.',
        features: ['Payment Gateway', 'Inventory System', 'Analytics']
    },
    {
        icon: Zap,
        title: 'Speed Optimization',
        description: 'Speed up existing applications with code optimization, caching, and modern techniques.',
        features: ['Speed Optimization', 'Code Review', 'Best Practices']
    }
];

const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'JavaScript', 'php', 'laravel', "wordpress",
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Express.js', 'GraphQL', 'Redis', 'Firebase', 'Vercel',
    'React Native', 'Flutter', 'FastAPI', 'MySQL', 'Prisma'
];

const projects = [
    {
        id: 'online-text-tools',
        title: 'OnlineTextTools',
        description: 'A tools website for online text editing and formatting, built with Laravel and Php. You can edit and format text online.',
        image: '/images/OnlineTextTools.jpeg',
        technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
        liveUrl: 'https://onlinetexttools.net/',
        category: 'Laravel'
    },
    {
        id: 'static-qr-code',
        title: 'Static QR Code',
        description: 'A static QR code generator built with Laravel and Php. You can generate QR codes for various purposes.',
        image: '/images/static-qr-code.jpeg',
        technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
        category: 'Laravel',
        liveUrl: 'https://static-qr-code.com/',
    },
    {
        id: 'easyconvertkit',
        title: 'EasyConvertKit',
        description: 'A website for online converting files, built with Laravel and Php. You can convert files online like pdf to doc, doc to pdf, etc.',
        image: '/images/easyconvertkit.jpeg',
        technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
        category: 'Laravel',
        liveUrl: 'https://easyconvertkit.com/',
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
    {
        name: 'David Thompson',
        role: 'Founder, FinanceFlow',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content:
            'Our legacy system was transformed into a modern, efficient platform with Aqib’s Laravel and MongoDB expertise. His problem-solving and communication were exceptional.',
        rating: 5,
        project: 'System Modernization'
    },
    {
        name: 'Lisa Wang',
        role: 'Product Manager, CloudTech',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content:
            'By leveraging AWS and cloud-ready architectures, Aqib reduced our costs by 40% and improved scalability. His full-stack insight is second to none. We are thrilled with the results.',
        rating: 5,
        project: 'Cloud Migration'
    },
    {
        name: 'James Wilson',
        role: 'VP Engineering, DataDrive',
        image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content:
            'Aqib’s mastery of MERN and Next.js allowed us to launch 2 months early without compromising quality. His full-stack solutions are future-proof and reliable.',
        rating: 5,
        project: 'Full-Stack Development'
    }
];

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-35">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-8 shadow-lg">
                            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-slate-700">Available for new projects</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-    indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Aqib
                            </span>
                            <br />
                            <span className="text-4xl md:text-6xl"> Full Stack Developer</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Full-stack developer crafting impactful web solutions with MERN, NEXt JS, Laravel and cloud technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/projects">
                                <button className="group cursor-pointer inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    View My Work
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="inline-flex cursor-pointer items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                                    <Code className="w-5 h-5 mr-2" />
                                    Let's Talk
                                </button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-900 mb-1">7+</div>
                                <div className="text-sm text-slate-600">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-900 mb-1">2+</div>
                                <div className="text-sm text-slate-600">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-900 mb-1">10+</div>
                                <div className="text-sm text-slate-600">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                                <div className="text-sm text-slate-600">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            End-to-end web development—from concept to launch—delivering modern, scalable solutions that drive results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technologies section */}
            <section className="py-16 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Technologies I <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Master</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Leveraging modern tools and frameworks to craft innovative, high-performing solutions.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
                    <div className="flex animate-scroll">
                        <div className="flex space-x-8 px-4">
                            {technologies.map((tech, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
                                >
                                    <span className="text-slate-700 font-medium whitespace-nowrap group-hover:text-blue-600 transition-colors duration-300">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex space-x-8 px-4">
                            {technologies.map((tech, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                                >
                                    <span className="text-slate-700 font-medium whitespace-nowrap group-hover:text-blue-600 transition-colors duration-300">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Latest <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Showcasing recent work that blends innovation, versatility, and technical expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
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
                                            href={project.liveUrl}
                                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4 text-slate-700" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                                    >
                                        View More
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link href="/projects">
                            <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                View All Projects
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            What Clients <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Say</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Hear directly from clients about their experience working with me and the results we achieved together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <Quote className="w-8 h-8 text-blue-600 opacity-60" />
                                    <div className="flex space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-6 leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
                                    {testimonial.project}
                                </div>

                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Build Something
                            <br />
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Extraordinary Together?
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Let’s bring your vision to life. I craft digital products that drive growth, inspire users, and deliver results.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
                                <p className="text-blue-100 mb-3">Get a response within 24 hours</p>
                                <a href="mailto:aqib28000@gmail.com" className="text-yellow-300 hover:text-yellow-200 font-medium transition-colors duration-200">
                                    aqib28000@gmail.com
                                </a>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
                                <p className="text-blue-100 mb-3">Available Mon-Fri, 9AM-6PM</p>
                                <a href="tel:+923278551518" className="text-yellow-300 hover:text-yellow-200 font-medium transition-colors duration-200">
                                    +92 327-8551518
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
