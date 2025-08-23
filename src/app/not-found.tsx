import NotFound from "@/components/ClientComponents/Not-Found";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codewithaqib.com";
  const currentPath = "/404";
  const fullUrl = `${baseUrl}${currentPath}`;

  return {
    title: "404 – Page Not Found | CodeWithAqib",
    description:
      "Oops! The page you’re looking for doesn’t exist or may have moved. Return to the homepage, explore projects, or contact me for help.",
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: "404 – Page Not Found | CodeWithAqib",
      description: "This page could not be found.",
      url: fullUrl,
      type: "website",
      siteName: "CodeWithAqib",
      images: [{ url: `${baseUrl}/faviconlogo.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title: "404 – Page Not Found | CodeWithAqib",
      description: "This page could not be found.",
      images: `${baseUrl}/faviconlogo.png`,
    },
  };
}

export default function Page() {
  return <NotFound />;
}
