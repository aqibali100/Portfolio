'use client';

import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'online-text-tools': {
      title: 'OnlineTextTools',
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
      liveUrl: 'https://onlinetexttools.net/',
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
    'static-qr-code': {
      title: 'Static QR Code',
      subtitle: 'A static QR code generator built with Laravel and Php. You can generate QR codes for various purposes.',
      description: 'Static‑QR‑Code offers a suite of entirely free, no‑sign‑up‑required tools for generating static QR codes—codes that embed your data directly without the ability to edit or expire. Each tool supports PNG and SVG downloads, customization (colors, logos, shapes), and instant use.',
      longDescription: `Static-QR-Code provides a full range of intuitive, browser-based tools for generating static QR codes—no sign-up, no fees, no expiration. Whether you need to share plain text, a URL, contact details, business card info, menus, PDFs, images, Wi-Fi credentials, or even a Facebook profile, there's a dedicated generator built just for that. Each tool offers styling flexibility—like colors, logos, module shapes—and supports high-quality PNG or scalable SVG output. Plus, you can decode existing QR codes with the Scan tool. Everything is designed for immediate use, ideal for educators, businesses, events, restaurants, and professionals looking for efficient, privacy-focused solutions for connecting offline materials to digital content.

      This tool converts plain text (up to about 300 characters) into static QR codes instantly. It supports bulk generation—so if you have 10, 100, or even 1,000 lines of text, it can produce a separate QR for each. You customize colors, logo placement, code size, and download options, choosing between PNG and SVG formats—ideal for both digital and print use. The codes never expire and are generated without signing up.

      Share Wi‑Fi access effortlessly without revealing your password. Just input your network's SSID, select the encryption type (WPA/WPA2/WPA3, WEP, or none), and generate a scannable QR code. Customize its appearance (colors, shapes, logo) and download in PNG or SVG. The resulting code works on both iOS and Android, remains valid indefinitely (until you change the password), and requires no account.
      
      Create a digital business card by embedding your contact details—name, phone number, email, address, and more—into a QR code. Personalize your code with colors and logos, preview it live, and download in high-resolution PNG or SVG. It’s a sleek, professional tool that works across smartphones and doesn’t require registration.
      
      Provide a scannable QR that either takes users to a map with a specified address or allows them to select a location on a map interface. Great for event organizers, real estate agents, or anyone needing easy wayfinding. You can style the code, and download it in PNG or SVG formats.
      
      Ideal for instantly starting a WhatsApp conversation: encode a number and even a default message into a QR. Upon scanning, the chat window opens immediately—no manual input needed. Customize design elements like logo, color, and shape. This tool remains free, static, and easy to use.
      
      All tools are 100% free, require no registrations, and generate truly static QR codes—that store embedded data directly in the image. These codes do not expire, do not track user behavior, and can’t be edited once created. You also get basic but powerful customization and both PNG and SVG download options, making them print-ready and ideal for long-term use.`,
      image: '/images/static-qr-code.jpeg',
      gallery: [
        '/images/static-qr-code1.jpeg',
        '/images/static-qr-code2.jpeg',
        '/images/static-qr-code3.jpeg',
        '/images/static-qr-code4.jpeg',
      ],
      technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
      category: 'Laravel',
      stack: 'Laravel',
      liveUrl: 'https://static-qr-code.com/',
      duration: '3 months',
      teamSize: '3 developers',
      status: 'Live',
      year: '2025',
      features: [
        'You can create unlimited QR codes without creating an account or paying any fees.',
        'Supports URLs, text, Wi-Fi, vCard/contact info, coupons, images, audio, and more.',
        'The data is embedded directly into the code, so it never expires and doesn’t rely on servers.',
        'No tracking or analytics; everything is generated locally in your browser.',
        'Change colors, add logos, frames, and shapes, and download in PNG or scalable SVG format.',
        'Can generate many codes at once, and codes work without any internet connection once created.',
      ],
      challenges: [
        {
          title: 'Handling Multiple QR Code Types',
          description: 'Providing support for various QR code formats like text, URLs, Wi-Fi, vCards, images, and audio while keeping the generation process simple and error-free.',
          solution: 'Built modular generators using optimized JavaScript libraries and ensured consistent encoding standards for each content type.'
        },
        {
          title: 'Ensuring Privacy and Security',
          description: 'Users expect QR codes to be generated privately without storing data on servers or tracking activity.',
          solution: 'All generation is processed locally in the browser, with no data collection, tracking, or server-side storage, ensuring complete privacy.'
        },
        {
          title: 'Performance and Scalability',
          description: 'Managing fast QR generation, customization, and bulk creation while maintaining responsiveness and reliability.',
          solution: 'Utilized lightweight code libraries, client-side rendering, SVG generation for scalability, and efficient caching mechanisms for bulk operations.'
        }
      ],
    },
    'easyconvertkit': {
      title: 'EasyConvertKit',
      subtitle: 'A website for online converting files, built with Laravel and Php. You can convert files online like pdf to doc, doc to pdf, etc.',
      description: 'Static‑QR‑Code offers a suite of entirely free, no‑sign‑up‑required tools for generating static QR codes—codes that embed your data directly without the ability to edit or expire. Each tool supports PNG and SVG downloads, customization (colors, logos, shapes), and instant use.',
      longDescription: `Static-QR-Code provides a full range of intuitive, browser-based tools for generating static QR codes—no sign-up, no fees, no expiration. Whether you need to share plain text, a URL, contact details, business card info, menus, PDFs, images, Wi-Fi credentials, or even a Facebook profile, there's a dedicated generator built just for that. Each tool offers styling flexibility—like colors, logos, module shapes—and supports high-quality PNG or scalable SVG output. Plus, you can decode existing QR codes with the Scan tool. Everything is designed for immediate use, ideal for educators, businesses, events, restaurants, and professionals looking for efficient, privacy-focused solutions for connecting offline materials to digital content.

      This tool converts plain text (up to about 300 characters) into static QR codes instantly. It supports bulk generation—so if you have 10, 100, or even 1,000 lines of text, it can produce a separate QR for each. You customize colors, logo placement, code size, and download options, choosing between PNG and SVG formats—ideal for both digital and print use. The codes never expire and are generated without signing up.

      Share Wi‑Fi access effortlessly without revealing your password. Just input your network's SSID, select the encryption type (WPA/WPA2/WPA3, WEP, or none), and generate a scannable QR code. Customize its appearance (colors, shapes, logo) and download in PNG or SVG. The resulting code works on both iOS and Android, remains valid indefinitely (until you change the password), and requires no account.
      
      Create a digital business card by embedding your contact details—name, phone number, email, address, and more—into a QR code. Personalize your code with colors and logos, preview it live, and download in high-resolution PNG or SVG. It’s a sleek, professional tool that works across smartphones and doesn’t require registration.
      
      Provide a scannable QR that either takes users to a map with a specified address or allows them to select a location on a map interface. Great for event organizers, real estate agents, or anyone needing easy wayfinding. You can style the code, and download it in PNG or SVG formats.
      
      Ideal for instantly starting a WhatsApp conversation: encode a number and even a default message into a QR. Upon scanning, the chat window opens immediately—no manual input needed. Customize design elements like logo, color, and shape. This tool remains free, static, and easy to use.
      
      All tools are 100% free, require no registrations, and generate truly static QR codes—that store embedded data directly in the image. These codes do not expire, do not track user behavior, and can’t be edited once created. You also get basic but powerful customization and both PNG and SVG download options, making them print-ready and ideal for long-term use.`,
      image: '/images/easyconvertkit.jpeg',
      gallery: [
        '/images/easyconvertkit1.jpeg',
        '/images/easyconvertkit2.jpeg',
        '/images/easyconvertkit3.jpeg',
        '/images/easyconvertkit4.jpeg',
      ],
      technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
      category: 'Laravel',
      stack: 'Laravel',
      liveUrl: 'https://easyconvertkit.com/',
      duration: '3 months',
      teamSize: '3 developers',
      status: 'Live',
      year: '2025',
      features: [
        'You can create unlimited QR codes without creating an account or paying any fees.',
        'Supports URLs, text, Wi-Fi, vCard/contact info, coupons, images, audio, and more.',
        'The data is embedded directly into the code, so it never expires and doesn’t rely on servers.',
        'No tracking or analytics; everything is generated locally in your browser.',
        'Change colors, add logos, frames, and shapes, and download in PNG or scalable SVG format.',
        'Can generate many codes at once, and codes work without any internet connection once created.',
      ],
      challenges: [
        {
          title: 'Handling Multiple QR Code Types',
          description: 'Providing support for various QR code formats like text, URLs, Wi-Fi, vCards, images, and audio while keeping the generation process simple and error-free.',
          solution: 'Built modular generators using optimized JavaScript libraries and ensured consistent encoding standards for each content type.'
        },
        {
          title: 'Ensuring Privacy and Security',
          description: 'Users expect QR codes to be generated privately without storing data on servers or tracking activity.',
          solution: 'All generation is processed locally in the browser, with no data collection, tracking, or server-side storage, ensuring complete privacy.'
        },
        {
          title: 'Performance and Scalability',
          description: 'Managing fast QR generation, customization, and bulk creation while maintaining responsiveness and reliability.',
          solution: 'Utilized lightweight code libraries, client-side rendering, SVG generation for scalability, and efficient caching mechanisms for bulk operations.'
        }
      ],
    },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <p className="text-slate-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="inline-flex cursor-pointer items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center text-slate-600 hover:text-blue-600 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full">
                  {project.stack}
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 font-medium rounded-full border border-slate-200">
                  {project.year}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                {project.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={project.liveUrl} target='_blank'
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Site
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p
                  className="text-lg text-slate-600 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <div className="whitespace-pre-line text-slate-600 leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: project.longDescription }}></p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Challenges & Solutions</h3>
                <div className="space-y-8">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h4>
                      <p className="text-slate-600 mb-4">{challenge.description}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <p className="text-blue-800"><strong>Solution:</strong> {challenge.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Project Info */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-slate-500 mr-3" />
                      <div>
                        <div className="text-sm text-slate-500">Duration</div>
                        <div className="font-medium text-slate-900">{project.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-slate-500 mr-3" />
                      <div>
                        <div className="text-sm text-slate-500">Team Size</div>
                        <div className="font-medium text-slate-900">{project.teamSize}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Code className="w-5 h-5 text-slate-500 mr-3" />
                      <div>
                        <div className="text-sm text-slate-500">Category</div>
                        <div className="font-medium text-slate-900">{project.category}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
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
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in a Similar <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Project?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            I'd love to help you build something amazing. Let's discuss your project requirements and create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button></Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;