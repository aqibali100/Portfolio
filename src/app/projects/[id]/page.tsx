import SingleProject from "@/components/ClientComponents/SingleProject";
import type { Metadata } from "next";

const projectData = [
  {
    id: 'online-text-tools',
    slug: 'online-text-tools',
    title: 'OnlineTextTools - CodeWithAqib',
    shortDescription: 'A tools website for online text editing and formatting, built with Laravel and Php. You can edit and format text online.',
    description: '',
    image: '/images/OnlineTextTools.jpeg',
    technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
    category: 'Laravel',
    stack: 'Laravel',
    liveUrl: 'https://onlinetexttools.net/',
    teamSize: '3 developers',
    status: 'Live',
    keywords: ['online text tools', 'text tools', 'online text cleaner', 'online text editor', 'online text formatter', 'online text editor online', 'online text cleaner online', 'online text formatter online'],
    featured: true,
  },
  {
    id: 'static-qr-code',
    slug: 'static-qr-code',
    title: 'Static QR Code Generator - CodeWithAqib',
    shortDescription: 'A static QR code generator built with Laravel and Php. You can generate QR codes for various purposes.',
    description: '',
    image: '/images/static-qr-code.jpeg',
    technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
    category: 'Laravel',
    stack: 'Laravel',
    liveUrl: 'https://static-qr-code.com/',
    teamSize: '3 developers',
    status: 'Live',
    keywords: ['static qr code generator', 'qr code generator', 'static qr code', 'qr code', 'static qr code generator online', 'qr code generator online', 'static qr code online', 'qr code online'],
    featured: true,
  },
  {
    id: 'easyconvertkit',
    slug: 'easyconvertkit',
    title: 'Easy Convert Kit - CodeWithAqib',
    shortDescription: 'A website for online converting files, built with Laravel and Php. You can convert files online like pdf to doc, doc to pdf, etc.',
    description: '',
    image: '/images/easyconvertkit.jpeg',
    technologies: ['Laravel', 'MySQL', 'Php', 'Html', 'CSS', 'JavaScript'],
    category: 'Laravel',
    stack: 'Laravel',
    liveUrl: 'https://easyconvertkit.com/',
    teamSize: '3 developers',
    status: 'Live',
    keywords: ['online file converter', 'file converter', 'online file converter online', 'file converter online', 'pdf to docx', 'docx to pdf', 'pdf to docx online', 'docx to pdf online'],
    featured: false,
  },
  {
    id: 'ak-boys-hostel',
    slug: 'ak-boys-hostel',
    title: 'Ak Boys Hostel Management System - CodeWithAqib',
    shortDescription: 'A Website for managing hostel rooms, built with MongoDB, Node Js, React Js and Php. You can manage hostel management system online.',
    description: '',
    image: '/images/ak-boys-hostel.jpeg',
    technologies: ['MongoDB', 'Node Js', 'React Js', 'Html', 'CSS', 'JavaScript'],
    category: 'Node Js',
    stack: 'Node Js',
    liveUrl: 'https://www.akboyshostel.online/',
    teamSize: '1 developers',
    status: 'Live',
    keywords: ['hostel management system', 'hostel management', 'hostel management system online', 'hostel management online', 'hostel management system online', 'hostel management online'],
    featured: false,
  },
  {
    id: 'glow-girls',
    slug: 'glow-girls',
    title: 'Glow Girls WooCommerce - CodeWithAqib',
    shortDescription: 'A wordpress woocommerce website for selling beauty products, built with Wordpress and Php. You can sell beauty products online.',
    description: '',
    image: '/images/glow-girls.jpeg',
    technologies: ['Wordpress', 'Php', 'Html', 'CSS', 'JavaScript', 'WooCommerce'],
    category: 'Wordpress',
    stack: 'Wordpress',
    liveUrl: 'https://glowgirls.site/',
    teamSize: '1 developers',
    status: 'Live',
    keywords: ['beauty products', 'beauty products online', 'beauty products online', 'beauty products online'],
    featured: false,
  },
];

// Fetch project based on the project ID (slug)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codewithaqib.com";
    const { id } = await params;

  // Find the project by id
  const project = projectData.find((p) => p.id === id);

  const fullUrl = `${baseUrl}/projects/${id}`;

  // If no project found, return "Project Not Found" metadata
  if (!project) {
    return {
      title: "Project Not Found - CodeWithAqib",
      description: "The requested project does not exist. Return to the homepage, explore projects, or contact me for help.",
      openGraph: {
        title: "Project Not Found - CodeWithAqib",
        description: "The requested project does not exist. Return to the homepage, explore projects, or contact me for help.",
        url: fullUrl,
        type: "website",
        siteName: "CodeWithAqib",
      },
      twitter: {
        card: "summary_large_image",
        title: "Project Not Found - CodeWithAqib",
        description: "The requested project does not exist. Return to the homepage, explore projects, or contact me for help.",
      },
    };
  }

  // Return the metadata for the found project
  return {
    title: project.title,
    description: project.shortDescription,
    keywords: project.keywords || [], // Ensure project has keywords defined
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: fullUrl,
      type: "website",
      siteName: "CodeWithAqib",
      images: [
        {
          url: `${baseUrl}${project.image}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: `${baseUrl}${project.image}`,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// The Page component will render the project based on the params id
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projectData.find((p) => p.id === id);
  // You can pass data as props if you want, but your client component reads from useParams, so this is fine
  return <SingleProject />;
}
