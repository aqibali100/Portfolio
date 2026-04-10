import SingleProject from "@/components/ClientComponents/SingleProject";
import type { Metadata } from "next";

const projectData = [
  {
    id: 'edutrainingcenter',
    slug: 'edutrainingcenter',
    title: 'Edu Training Center - CodeWithAqib',
    shortDescription: 'The website EDU Training Centre belongs to EDU Training Centre Ltd, a UK-based training institute that provides professional courses in the security industry.',
    description: 'The website EDU Training Centre Ltd is an online platform for a UK-based training institute that specializes in preparing individuals for careers in the private security industry. The site serves as both an informational hub and a course booking system, allowing users to explore available training programs, understand certification requirements, and enroll in courses directly.',
    image: '/images/edutraining.png',
    technologies: ['Html', 'CSS', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Next.js',
    stack: 'Next.js',
    liveUrl: 'https://www.edutraining.co.uk',
    teamSize: '2 developers',
    status: 'Live',
    keywords: ['edu training center', 'training institute', 'security industry training', 'sia training', 'next.js website', 'node.js website', 'mongodb website'],
    featured: true,
  },
  {
    id: 'globalprimeautos',
    slug: 'globalprimeautos',
    title: 'GlobalPrimeAutos - CodeWithAqib',
    shortDescription: 'A car dealership website built with Wordpress and Php. It features car listings, search functionality, and contact forms.',
    description: '',
    image: '/images/globalprimeautos.png',
    technologies: ['Html', 'CSS', 'JavaScript', 'Php', 'Wordpress', 'MySQL'],
    category: 'Wordpress',
    stack: 'Wordpress',
    liveUrl: 'https://globalprimeautos.com/',
    teamSize: '2 developers',
    status: 'Live',
    keywords: ['car dealership', 'wordpress website', 'php website', 'car listings', 'search functionality', 'contact forms', 'car dealership online', 'wordpress car dealership', 'php car dealership', 'car listings online', 'search functionality online', 'contact forms online'],
    featured: true,
  },
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
    liveUrl: 'https://onlinetexttools.io',
    teamSize: '3 developers',
    status: 'Live',
    keywords: ['online text tools', 'text tools', 'online text cleaner', 'online text editor', 'online text formatter', 'online text editor online', 'online text cleaner online', 'online text formatter online'],
    featured: true,
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
    liveUrl: 'https://www.akboyshostel.store',
    teamSize: '1 developers',
    status: 'Live',
    keywords: ['hostel management system', 'hostel management', 'hostel management system online', 'hostel management online', 'hostel management system online', 'hostel management online'],
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
