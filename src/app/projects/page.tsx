// app/projects/page.tsx
import Projects from "@/components/ClientComponents/Projects";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codewithaqib.com";
  const currentPath = "/projects";
  const fullUrl = `${baseUrl}${currentPath}`;

  return {
    title: "Projects That Deliver Results – CodeWithAqib",
    description:
      "Explore my portfolio of web development projects, showcasing full-stack applications, frontend designs, backend systems, and innovative solutions.",
    keywords: ["CodeWithAqib", "Projects", "Portfolio", "Web Development", "Full Stack", "Frontend", "Backend", "React", "Next.js", "Node.js", "Laravel", "TypeScript",
    ],
    openGraph: {
      title: "Projects That Deliver Results – CodeWithAqib",
      description:
        "Browse the portfolio of projects developed by CodeWithAqib, including modern web apps, backend APIs, and creative solutions.",
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
      title: "Projects That Deliver Results – CodeWithAqib",
      description:
        "Browse the portfolio of projects developed by CodeWithAqib, including modern web apps, backend APIs, and creative solutions.",
      images: `${baseUrl}/faviconlogo.png`,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export default function Page() {
  return <Projects />;
}
