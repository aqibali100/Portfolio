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
      description: 'EasyConvertKit.com is an online platform offering a suite of free, browser-based tools designed for converting various types of files. The website provides over 30 different converters, enabling users to quickly and securely transform documents, images, presentations, and spreadsheets between popular formats.',
      longDescription: `PDF to Word (DOCX): Convert PDF files into editable Word documents without losing formatting, making it ideal for editing contracts, reports, or study materials.
      
      PDF to JPG/PNG: Transform each PDF page into high-quality JPG or PNG images, suitable for sharing, embedding in presentations, or archiving.
      
      Word to JPG/PNG: Convert Word documents into high-resolution JPG or PNG images, preserving the original layout and formatting.
      
      Word to PDF: Instantly convert Word documents into universally compatible PDF files, ensuring consistent formatting across all devices.
      
      PDF Merge, Split, Rotate, Protect: Combine multiple PDFs into one, split a large PDF into smaller files, rotate pages as needed, or protect documents with password encryption for enhanced security.
      
      JPG to SVG/WebP/PNG: Convert JPG images into scalable SVG vectors, compressed WebP files, or lossless PNG images, suitable for web use and design projects.
      
      PNG to JPG/SVG/WebP: Transform PNG images into JPG for smaller file sizes, SVG for scalability, or WebP for efficient web usage.
      
      SVG to JPG/PNG/WebP/PDF: Convert SVG vector graphics into raster formats like JPG or PNG, or into PDF for easy sharing and printing.
      
      PPT/PPTX to JPG/PNG: Convert PowerPoint slides into high-resolution JPG or PNG images, preserving the original design and layout.
      
      PPTX to PDF: Transform PowerPoint presentations into PDF format, ensuring consistent formatting and easy sharing.
      
      XLS/XLSX to JPG/PNG: Convert Excel spreadsheets into high-resolution JPG or PNG images, useful for embedding in reports or presentations.
      
      XLS/XLSX to PDF: Change Excel files into PDF documents, preserving the layout and formatting for consistent viewing.`,
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
        'Free and Unlimited Access: No account or fees required to use the conversion tools, and you can convert as many files as you need.',
        'Wide Range of Formats: Supports conversions for documents (PDF, Word, PPTX, Excel), images (JPG, PNG, SVG, WebP), presentations, and more.',
        'Secure and Private: The entire process happens locally in your browser with no tracking or analytics, ensuring privacy and data security.',
        'No Expiry: Files are converted instantly, and once you download them, they never expire, allowing easy access at any time. ',
        'Customization Options: Change the output settings like format, size, and quality to match your requirements.',
        'Batch Conversion: Ability to convert multiple files simultaneously for increased productivity, with no need for an internet connection once the tool is loaded.',
      ],
      challenges: [
        {
          title: 'Handling Multiple File Formats',
          description: 'Supporting a wide variety of file types for conversion, such as PDF, Word, JPG, PNG, PPTX, Excel, and more, while maintaining the quality and integrity of each format.',
          solution: 'Developed robust, modular conversion tools using optimized JavaScript libraries, ensuring seamless transitions between formats while preserving file structure and content.'
        },
        {
          title: 'Ensuring Privacy and Security',
          description: 'Users expect that their files are converted privately without storing any data on servers or tracking their activities.',
          solution: 'All conversions are processed locally in the user\'s browser, with no data collection or server-side storage, ensuring complete privacy and security for the files.'
        },
        {
          title: 'Performance and Scalability',
          description: 'Handling multiple simultaneous conversions and ensuring fast processing times, especially for large files, while keeping the interface responsive and efficient.',
          solution: 'Used lightweight code libraries, client-side rendering, and optimized caching mechanisms to handle bulk conversions and ensure high performance without compromising user experience.',
        }
      ],
    },
    'ak-boys-hostel': {
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
    'glow-girls': {
      title: 'Glow Girls',
      subtitle: 'A wordpress woocommerce website for selling beauty products, built with Wordpress and Php. You can sell beauty products online.',
      description: 'GlowGirls.site offers a wide range of women’s apparel and accessories. The apparel section features stylish and comfortable clothing, including soft cami shirts available in black and blue, turn-up sleeve V-neck shirts, summer long shirts, and tank tops. These items are designed to cater to women looking for casual yet fashionable outfits. The accessories section includes trendy eyewear, such as butterfly-shaped sunglasses in light grey and brown, and stylish watches that add a perfect finishing touch to any outfit. The site’s collection is carefully curated to offer products that blend style, comfort, and functionality for every woman.',
      longDescription: `GlowGirls.site is known for its competitive pricing, making it an affordable option for fashion lovers. The prices are reasonable, with items like the Black Women’s Soft Cami Shirt being priced at ₨ 699, down from the original ₨ 1,398. This offers significant savings for shoppers. Additionally, the site provides attractive discounts, including a 10% off coupon that can be applied to orders over ₨ 2,000 by using the promo code "get10%." This discount makes the shopping experience even more appealing, ensuring that customers can snag trendy items without breaking the bank.
      
      GlowGirls.site offers free shipping on all orders over ₨ 2,000, making it convenient for shoppers to get their purchases delivered without additional costs. The site also has a flexible return policy, allowing customers to return products within 15 days of purchase. This generous return window ensures that customers are satisfied with their purchases and provides peace of mind when shopping online. The combination of free shipping and a straightforward return policy reflects the site’s commitment to providing a hassle-free shopping experience.
      
      GlowGirls.site is a reliable and user-friendly online fashion retailer catering to women’s apparel and accessories. The site’s offerings are stylish yet affordable, with regular discounts and promotions available to customers. Free shipping on orders over ₨ 2,000 and a generous 15-day return policy ensure that the shopping experience is convenient and risk-free. With a focus on secure transactions and responsive customer support, GlowGirls.site is a great choice for women looking to update their wardrobe with trendy, comfortable clothing and accessories.
      `,
      image: '/images/glow-girls.jpeg',
      gallery: [
        '/images/glow-girls1.jpeg',
        '/images/glow-girls2.jpeg',
        '/images/glow-girls3.jpeg',
        '/images/glow-girls4.jpeg',
      ],
      technologies: ['Wordpress', 'Php', 'Html', 'CSS', 'JavaScript', 'WooCommerce'],
      category: 'Wordpress',
      stack: 'Wordpress',
      liveUrl: 'https://glowgirls.site/',
      duration: '2 weeks',
      teamSize: '1 developers',
      status: 'Live',
      year: '2024',
      features: [
        'Efficient Product & Order Management: Seamless product listing and order processing.',
        'Customer Account Management: Easy user registration, profile updates, and order tracking.',
        'Inventory & Stock Control: Real-time inventory updates and stock management.',
        'Secure Payment Integration: Safe and transparent payment processing with multiple options.',
        'Discount & Promo Code Management: Create and manage discounts and promotional offers.',
        'Order History & Tracking: Keep track of previous orders and delivery status for customers.'
      ],
      challenges: [
        {
          title: 'Managing Product Listings and Orders',
          description: 'Coordinating the product catalog, handling orders, tracking inventory, and managing customer data, all while ensuring a smooth shopping experience.',
          solution: 'Implemented an integrated WordPress eCommerce platform, allowing easy management of product listings, order processing, and real-time inventory updates for seamless store operations.'
        },
        {
          title: 'Ensuring Customer Data Security',
          description: 'With sensitive customer data, including payment details and personal information, ensuring privacy and security is a top priority.',
          solution: 'Adopted secure payment gateways and strong encryption protocols, safeguarding customer information and ensuring compliance with data protection regulations.'
        },
        {
          title: 'Handling Real-Time Transactions and Performance',
          description: 'Managing high volumes of transactions, ensuring fast processing times, and delivering a seamless shopping experience during peak traffic times.',
          solution: 'Optimized the site’s backend and frontend for scalability and real-time updates, ensuring smooth and responsive performance even during high traffic and peak shopping periods.'
        },
        {
          title: 'Customizing Product Displays and Offers',
          description: 'Adapting the site to showcase various product categories, manage discounts, and provide personalized recommendations to customers.',
          solution: 'Developed a flexible admin panel, enabling the customization of product displays, promotional offers, and category layouts to meet customer demands and maximize sales.'
        }
      ]
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