'use client';

import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AnimatedSection from '../AnimatedSection';

const ProjectDetail = () => {
    const { id } = useParams() as { id?: string };

    const projects = {
        'edutrainingcenter': {
            id: 'edutrainingcenter',
            title: 'Edu Training Center',
            subtitle: 'The website EDU Training Centre belongs to EDU Training Centre Ltd, a UK-based training institute that provides professional courses in the security industry.',
            description: 'The website EDU Training Centre Ltd is an online platform for a UK-based training institute that specializes in preparing individuals for careers in the private security industry. The site serves as both an informational hub and a course booking system, allowing users to explore available training programs, understand certification requirements, and enroll in courses directly.',
            longDescription: `At its core, the platform focuses on delivering SIA (Security Industry Authority)-related training. In the UK, anyone who wants to work in roles such as a security guard, door supervisor, or CCTV operator must obtain an SIA license. This website is designed to guide users through that process by offering structured courses that meet official requirements. It simplifies what can otherwise be a complex pathway into the security profession, especially for beginners or newcomers to the UK job market.

The courses offered on the site are highly practical and job-oriented. For example, the Door Supervisor course typically includes modules on conflict management, physical intervention techniques, safety awareness, and legal responsibilities. Similarly, CCTV and security guard training programs focus on surveillance skills, incident handling, and professional conduct. These courses are usually short-term (ranging from a few days to a couple of weeks), making them accessible for people who want to quickly enter the workforce.

Another important aspect of the platform is its focus on employability. The website emphasizes that completing these courses can open doors to various job opportunities, including work at events, shopping centers, offices, construction sites, and nightlife venues. It positions itself not just as a training provider but as a stepping stone toward stable employment. This is particularly appealing to job seekers, immigrants, and individuals looking to switch careers.

From a user experience perspective, the website is structured to be straightforward and conversion-focused. Visitors can easily browse courses, check schedules, view pricing, and book seats online. There are also sections that explain the benefits of each course, eligibility requirements, and potential career outcomes. The platform appears to prioritize clarity and ease of use, ensuring that even users with limited technical knowledge can navigate it without difficulty.`,
            image: '/images/edutraining.png',
            gallery: [
                '/images/edutraining1.png',
                '/images/edutraining2.png',
                '/images/edutraining3.png',
                '/images/edutraining4.png',
            ],
            technologies: ['Html', 'CSS', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            category: 'Next.js',
            stack: 'Next.js',
            liveUrl: 'https://edutraining.co.uk',
            duration: '1 Month',
            teamSize: '2 developers',
            status: 'Live',
            year: '2025',
            features: [
                'Browse a wide range of professional training courses focused on the UK security industry.',
                'Detailed course listings including duration, modules, requirements, and pricing.',
                'SIA-approved training programs such as Door Supervisor, Security Guard, and CCTV courses.',
                'Easy online booking system to enroll in courses with flexible scheduling options.',
                'Guidance on obtaining SIA licenses and meeting legal requirements for security jobs in the UK.',
                'Short-term, job-oriented courses designed to help users quickly enter the workforce.',
                'Responsive and user-friendly platform accessible on desktop, tablet, and mobile devices.',
                'Support and assistance available for course selection, enrollment, and career guidance.',
                'Training focused on real-world skills such as conflict management, safety, and surveillance.',
                'Opportunities to improve employability and access security-related job roles after certification.',
            ],
            challenges: [
                {
                    title: 'Building Trust in Online Training and Certifications',
                    description: 'Convincing users that the courses are legitimate, recognized, and valuable for securing jobs in the UK security industry.',
                    solution: 'Highlighted SIA-approved certifications, provided clear course details, showcased outcomes, and ensured transparent communication to build credibility.'
                },
                {
                    title: 'Simplifying the Enrollment and Licensing Process',
                    description: 'Users may find it confusing to understand course requirements, booking steps, and the process of obtaining an SIA license.',
                    solution: 'Streamlined the user journey with clear step-by-step guidance, simple booking flows, and informative content explaining licensing requirements.'
                },
                {
                    title: 'Providing a User-Friendly Learning and Booking Experience',
                    description: 'Managing multiple courses, schedules, and information while keeping the platform easy to navigate for users of all technical levels.',
                    solution: 'Designed a clean, responsive interface with structured course listings, intuitive navigation, and mobile-friendly layouts for seamless access.'
                }
            ]
        },
        'globalprimeautos': {
            id: 'globalprimeautos',
            title: 'GlobalPrimeAutos',
            subtitle: 'A car dealership website built with Wordpress and Php. It features car listings, search functionality, and contact forms.',
            description: 'Global Prime Autos is an online automotive marketplace specializing in quality used and imported vehicles, with a strong focus on Japanese cars sourced directly from trusted suppliers. The platform aims to simplify the car-buying process by offering a wide selection of vehicles, detailed listings, and international shipping options. Designed for buyers seeking affordability, transparency, and global access, Global Prime Autos connects customers with vehicles across borders, making it easier to explore, compare, and purchase cars from anywhere in the world.',
            longDescription: `Global Prime Autos is a digital automotive platform focused on making the process of buying used and imported vehicles simpler, more transparent, and more accessible for customers worldwide. The platform showcases a diverse inventory of quality vehicles—particularly Japanese imports—with detailed listings that include specifications, images, and pricing to help buyers make informed decisions.

Designed with international customers in mind, Global Prime Autos supports cross-border vehicle sourcing and provides guidance around global shipping and export processes. By centralizing vehicle discovery and inquiry in one place, the platform reduces the complexity often associated with finding reliable cars from overseas markets.

The website emphasizes ease of use, featuring a clean layout, intuitive navigation, and responsive design that works seamlessly across desktop and mobile devices. Customers can browse, compare, and inquire about vehicles efficiently without unnecessary friction.

Overall, Global Prime Autos aims to bridge the gap between global vehicle suppliers and buyers by offering a streamlined online experience that prioritizes accessibility, clarity, and convenience in the used car marketplace.`,
            image: '/images/globalprimeautos.png',
            gallery: [
                '/images/globalprimeautos-1.png',
                '/images/globalprimeautos-2.png',
                '/images/globalprimeautos-3.png',
                '/images/globalprimeautos-4.png',
            ],
            technologies: ['Html', 'CSS', 'JavaScript', 'Php', 'Wordpress', 'MySQL'],
            category: 'Wordpress',
            stack: 'Wordpress',
            liveUrl: 'https://globalprimeautos.com/',
            duration: '1 Week',
            teamSize: '2 developers',
            status: 'Live',
            year: '2025',
            features: [
                'Browse a wide selection of quality used and imported vehicles from trusted sources.',
                'Detailed car listings with specifications, images, and pricing for easy comparison.',
                'Access Japanese and international vehicles with worldwide shipping options.',
                'Simple and user-friendly platform accessible on desktop, tablet, or mobile devices.',
                'Direct inquiry and support options to assist buyers throughout the purchase process.',
                'Designed to help customers find affordable, reliable vehicles efficiently.',
            ],
            challenges: [
                {
                    title: 'Building Trust in Online Vehicle Purchases',
                    description: 'Convincing customers to confidently buy used and imported vehicles online, especially across international borders.',
                    solution: 'Provided detailed vehicle listings, clear specifications, transparent pricing, and accessible customer support to improve credibility and buyer confidence.'
                },
                {
                    title: 'Managing International Logistics and Shipping',
                    description: 'Handling the complexity of global vehicle shipping, documentation, and varying import regulations across different countries.',
                    solution: 'Streamlined the process by partnering with experienced logistics providers and guiding customers through shipping and export procedures.'
                },
                {
                    title: 'Ensuring a Simple and User-Friendly Experience',
                    description: 'Presenting a large inventory of vehicles while keeping the website easy to navigate for users with different technical skill levels.',
                    solution: 'Designed a clean, responsive interface with intuitive navigation, filters, and mobile-friendly layouts for seamless browsing.'
                }
            ]
        },
        'online-text-tools': {
            id: 'online-text-tools',
            title: 'Online Text Tools',
            subtitle: 'A tools website for online text editing and formatting, built with Laravel and Php. You can edit and format text online.',
            description: 'The <strong>Text Cleaner tool</strong> is designed to instantly remove unwanted formatting from your text—whether it’s hidden HTML tags, inline styles, smart quotes, extra spaces, line breaks, invisible tables, bullet points, or odd font styles—that often sneak in when copying text from PDFs, Word documents, or Google Docs. Simply paste your text, choose your cleaning preferences, and hit “Clean.” In just a moment, it delivers a smooth, plain-text result devoid of glitches. This tool is a major time-saver for writers, editors, designers, and anyone aiming for clean, unformatted content.',
            longDescription: `If you're dealing with large text blocks that include repetitive lines—such as logs, datasets, or merged documents—the <strong>Duplicate Line Remover</strong> helps tidy up your content quickly. Paste your text, choose whether to ignore case, and the tool will strip out duplicate lines while preserving the original order. The result is cleaner, more readable text, with reduced file size and improved accuracy. You can copy the cleaned text or download it as a .txt file.
      
      The <strong>Case Converter</strong> offers multiple capitalization styles—uppercase, lowercase, sentence case, capitalized (first letter of each word), and alternating case (AlTeRnAtInG)—to suit any formatting need. Just paste your text, select the case style, and see the converted output in real time. Whether you're polishing essays, formatting UI text, or cleaning up content for social media, this tool is fast, responsive, and works entirely in your browser.

      Need to repeat a phrase, emoji, or sentence multiple times? The <strong>Text Repeater tool</strong> makes it effortless. Simply input your desired text, set how many times you'd like it repeated, optionally include separators like spaces or line breaks, and click “Repeat.” The tool then generates your repeated text instantly—perfect for creating dummy content, testing layouts, or having fun with long emoticon strings.
      
      When creativity hits a block, the <strong>Random Sentence Generator</strong> comes to the rescue. It produces entirely random—but grammatically correct—sentences at each click. Ideal for writing prompts, vocabulary exercises, ESL practice, or content inspiration, this tool works fast and seamlessly on any device without registration or limits.
      
      The <strong>Morse Code Generator</strong> enables seamless conversion between text and Morse code. You can toggle between encoding (text → Morse) and decoding (Morse → text), and customize settings like words-per-minute (WPM), tone frequency, Farnsworth spacing (for slowed timing), and more. It even plays audio beeps and handles punctuation, spaces, and typos gracefully. The tool runs entirely in your browser and keeps all conversions private. Whether you're learning Morse code or exploring creative encoding for art or storytelling, this is a versatile and engaging option.`,
            image: '/images/OnlineTextTools.jpeg',
            gallery: [
                '/images/OnlineTextTools1.jpeg',
                '/images/OnlineTextTools2.jpeg',
                '/images/OnlineTextTools3.jpeg',
                '/images/OnlineTextTools4.jpeg',
            ],
            technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
            category: 'Laravel',
            stack: 'Laravel',
            liveUrl: 'https://onlinetexttools.io',
            duration: '3 months',
            teamSize: '3 developers',
            status: 'Live',
            year: '2025',
            features: [
                'All tools run directly in your browser, no downloads or installations required.',
                'Encode/decode text (Base64, Hex, Binary, ROT13), and URL encode/decode.',
                '100% free and accessible, with no registration or login required.',
                'Works seamlessly on desktop, tablet, or mobile devices.',
                'Most tools show instant results as you type or paste content.',
                'Find-and-replace text or repeat text multiple times efficiently.',
            ],
            challenges: [
                {
                    title: 'Browser-Only Processing',
                    description: 'Ensuring all text operations run entirely within the user’s browser without sending any data to the server, to maintain privacy and speed.',
                    solution: 'Implemented client-side JavaScript processing for all tools, leveraging Web APIs and efficient algorithms for instant transformations.'
                },
                {
                    title: 'Handling Large Text Inputs',
                    description: 'Processing large amounts of text, such as logs or big datasets, without causing browser lags or crashes.',
                    solution: 'Optimized text manipulation functions using streaming, chunk processing, and memory-efficient data structures.'
                },
                {
                    title: 'Tool Variety and Consistency',
                    description: 'Offering dozens of different utilities (cleaning, formatting, encoding, generators) while keeping the interface simple and consistent.',
                    solution: 'Created a modular architecture where each tool shares common UI components and logic, ensuring a seamless user experience.'
                }
            ]
        },
        'ak-boys-hostel': {
            id: 'ak-boys-hostel',
            title: 'AK Boys Hostel',
            subtitle: 'A Website for managing hostel rooms, built with MongoDB, Node Js, React Js and Php. You can manage hostel management system online.',
            description: 'The website appears to be an online portal for the AK Boys Hostel Management System. It offers a digital platform for managing hostel-related activities, including room bookings, fee payments, and other administrative tasks. The site features a login page with options for users to sign in or reset their passwords.',
            longDescription: `However, the website does not provide detailed information about the hostel's facilities, location, or contact details. For comprehensive information about the AK Boys Hostel, such as accommodation options, amenities, pricing, and location, it is advisable to contact the hostel directly or visit their official social media pages.
      
      Room availability is dynamically updated, allowing students to select and book rooms based on their preferences and availability. The system manages room assignments, ensuring efficient utilization and minimizing conflicts. Booking confirmations and reminders are sent to students, streamlining the reservation process.
      
      The system maintains records of hostel staff and workers, including their roles, responsibilities, and schedules. This centralized database facilitates efficient management and coordination of hostel operations. Admins can assign tasks, monitor performance, and ensure smooth functioning of hostel services.
      
      Salary details for staff and workers are securely stored and managed within the system. Admins can process payments, track salary histories, and generate reports, ensuring timely and accurate compensation. This feature promotes transparency and accountability in financial dealings.
      
      Students can report maintenance issues through the system, which are then tracked and assigned to appropriate personnel. This feature ensures timely resolution of problems, maintaining the quality and safety of hostel facilities. Admins can monitor the status of reported issues and ensure prompt action.
      
      The system maintains comprehensive records of all activities, including room bookings, maintenance requests, staff assignments, and financial transactions. This historical data supports decision-making, audits, and continuous improvement of hostel operations.
      
      In summary, the Ak Boys Hostel Management System leverages the MERN stack to provide a robust, scalable, and efficient platform for managing hostel operations. Its comprehensive features streamline processes, enhance user experience, and ensure effective management of resources.
      `,
            image: '/images/ak-boys-hostel.jpeg',
            gallery: [
                '/images/ak-boys-hostel1.jpeg',
                '/images/ak-boys-hostel2.jpeg',
                '/images/ak-boys-hostel3.jpeg',
                '/images/ak-boys-hostel4.jpeg',
            ],
            technologies: ['MongoDB', 'Node Js', 'React Js', 'Html', 'CSS', 'JavaScript'],
            category: 'Node Js',
            stack: 'Node Js',
            liveUrl: 'https://www.akboyshostel.online/',
            duration: '2 months',
            teamSize: '1 developers',
            status: 'Live',
            year: '2024',
            features: [
                'Efficient Room & Booking Management: Streamlined room booking and real-time updates.',
                'Comprehensive Customer & Profile Management: Easy registration and profile updates for residents.',
                'Staff & Worker Management: Manage staff tasks and schedules efficiently.',
                'Secure Salary Management: Transparent salary processing and report generation.',
                'Maintenance Tracking: Report and track maintenance issues easily.',
                'Historical Record Keeping: Maintain records of activities, bookings, and transactions.',
            ],
            challenges: [
                {
                    title: 'Managing Hostel Operations Efficiently',
                    description: 'Coordinating various aspects of hostel management, including room bookings, staff tasks, maintenance, and history records, while ensuring smooth and seamless operations.',
                    solution: 'Developed an integrated platform using the MERN stack, streamlining all hostel management processes in one central system, enabling easy management of rooms, staff, and services.'
                },
                {
                    title: 'Ensuring Data Security and Privacy',
                    description: 'With sensitive information like customer details, staff records, and financial transactions, ensuring privacy and security is crucial.',
                    solution: 'Implemented strong encryption and secure data handling practices, ensuring all data remains private and secure, with no third-party tracking or analytics.'
                },
                {
                    title: 'Handling Real-Time Data and Performance',
                    description: 'Ensuring the system processes multiple tasks simultaneously (like room bookings, staff management, and maintenance requests) while maintaining a responsive and fast interface.',
                    solution: 'Utilized optimized backend and frontend architectures with real-time data updates, ensuring smooth performance and scalability even under high load.'
                },
                {
                    title: 'Customization for Different Hostel Needs',
                    description: 'Accommodating various types of hostel configurations, including different room types, maintenance requirements, and salary management settings.',
                    solution: 'Built highly customizable settings in the admin panel, allowing hostel administrators to adjust room types, salary details, maintenance tracking, and more to fit their specific needs.'
                }
            ]
        },
    };

    const project = projects[id as keyof typeof projects];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-white mb-8">The project you're looking for doesn't exist.</p>
                    <Link
                        href="/projects"
                        className="inline-flex cursor-pointer items-center px-6 py-3 border border-[#22F2EF]/50 text-[#22F2EF] font-medium rounded-lg transition-colors duration-200 hover:bg-[#22F2EF]/10 transform hover:scale-105 hover:shadow-lg hover:shadow-[#22F2EF]/20 transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <section className="pt-10 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-[#22F2EF] hover:text-[#22F2EF]/80 font-medium mb-8 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-2 text-[#22F2EF] font-medium rounded-full border border-[#22F2EF]/50">
                                    {project.stack}
                                </span>
                                <span className="px-4 py-2 bg-[#22F2EF] backdrop-blur-sm text-slate-700 font-medium rounded-full border border-[#22F2EF]/50">
                                    {project.year}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                                {project.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative overflow-hidden inline-flex items-center justify-center px-6 py-3 border border-[#22f2ef]/50 text-white font-bold rounded-xl hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20"
                                >
                                    <span className="flex items-center">
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        View Live Site
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <AnimatedSection className="mb-7">
                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                    Project <span className="text-[#22f2ef]">Overview</span>
                                </h2>
                            </AnimatedSection>
                            <div className="prose prose-lg max-w-none">
                                <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                <div className="whitespace-pre-line text-slate-600 leading-relaxed">
                                    <p className="text md:text-1xl text-white mb-8 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: project.longDescription }}></p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <AnimatedSection className="mb-7">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                        Key <span className="text-[#22f2ef]">Features</span>
                                    </h2>
                                </AnimatedSection>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <AnimatedSection key={index}>
                                            <div className="flex items-center p-4 bg-[#22F2EF]/20 text-[#22F2EF] rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                                                <span className="">{feature}</span>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12">
                                <AnimatedSection className="mb-7">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                        Challenges & <span className="text-[#22f2ef]">Solutions</span>
                                    </h2>
                                </AnimatedSection>
                                <div className="space-y-8">
                                    {project.challenges.map((challenge, index) => (
                                        <AnimatedSection key={index}>
                                            <div className="rounded-xl p-6 border border-[#22f2ef]/50">
                                                <h4 className="text-xl font-semibold text-[#22f2ef] mb-3">{challenge.title}</h4>
                                                <p className="text-white mb-4">{challenge.description}</p>
                                                <div className="bg-[#22f2ef]/20 border-l-4 border-[#22f2ef] p-4 rounded">
                                                    <p className="text-[#22f2ef]"><strong>Solution:</strong> {challenge.solution}</p>
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <div className="rounded-2xl p-6 border border-[#22f2ef]/50">
                                    <h3 className="text-xl font-bold text-white mb-6">Project Info</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <Calendar className="w-5 h-5 text-[#22f2ef] mr-3" />
                                            <div>
                                                <div className="text-sm text-white">Duration</div>
                                                <div className="font-medium text-[#22f2ef]">{project.duration}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="w-5 h-5 text-[#22f2ef] mr-3" />
                                            <div>
                                                <div className="text-sm text-white">Team Size</div>
                                                <div className="font-medium text-[#22f2ef]">{project.teamSize}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Code className="w-5 h-5 text-[#22f2ef] mr-3" />
                                            <div>
                                                <div className="text-sm text-white">Category</div>
                                                <div className="font-medium text-[#22f2ef]">{project.category}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl p-6 border border-[#22f2ef]/50">
                                    <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-[#22f2ef]/20 text-[#22f2ef] text-sm font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {project.gallery && (
                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="mb-7">
                            <h2 className="text-3xl md:text-4xl text-center font-bold text-white leading-tight">
                                Project <span className="text-[#22f2ef]">Gallery</span>
                            </h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.gallery.map((image, index) => (
                                <AnimatedSection key={index}>
                                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                        <img
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

        </div>
    );
};

export default ProjectDetail;