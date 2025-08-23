import Skills from "@/components/ClientComponents/Skills";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codewithaqib.com";
  const currentPath = "/skills";
  const fullUrl = `${baseUrl}${currentPath}`;

  return {
    title: "Skills & Tech Stack – CodeWithAqib",
    description:
      "Explore my full-stack skills and tech stack—React, Next.js, Node.js, Laravel, MySQL, Tailwind CSS, and TypeScript—used to build fast, scalable products.",
    keywords: ["CodeWithAqib", "solutions", "Web Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Php Developer", "Laravel Developer", "Next js Developer", "React js Developer", "Node js Developer", "Most Famous web Developer",
    ],
    openGraph: {
      title: "Skills & Tech Stack – CodeWithAqib",
      description:
        "Explore my full-stack skills and tech stack—React, Next.js, Node.js, Laravel, MySQL, Tailwind CSS, and TypeScript—used to build fast, scalable products.",
      url: fullUrl,
      type: "website",
      siteName: "CodeWithAqib",
      images: [
        {
          url: `${baseUrl}/faviconlogo.png`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Skills & Tech Stack – CodeWithAqib",
      description:
        "Explore my full-stack skills and tech stack—React, Next.js, Node.js, Laravel, MySQL, Tailwind CSS, and TypeScript—used to build fast, scalable products.",
      images: `${baseUrl}/faviconlogo.png`,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export default function Page() {
  return <Skills />;
}