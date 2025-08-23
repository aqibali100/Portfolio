import Contact from "@/components/ClientComponents/Contact";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codewithaqib.com";
  const currentPath = "/contact";
  const fullUrl = `${baseUrl}${currentPath}`;

  return {
    title: "Collaborate with Me – CodeWithAqib",
    description:
      "Get in touch to discuss your project, hire me, or book a consultation.",
    keywords: ["CodeWithAqib", "Contact", "Hire Developer", "Project Inquiry", "Web Development Services", "Full Stack Developer", "Frontend Developer", "Backend Developer", "React Developer", "Next.js Developer", "Node.js Developer", "Laravel Developer", "TypeScript",
    ],
    openGraph: {
      title: "Collaborate with Me – CodeWithAqib",
      description:
        "Get in touch to discuss your project, hire me, or book a consultation.",
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
      title: "Collaborate with Me – CodeWithAqib",
      description:
        "Get in touch to discuss your project, hire me, or book a consultation.",
      images: `${baseUrl}/faviconlogo.png`,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export default function Page() {
  return <Contact />;
}
