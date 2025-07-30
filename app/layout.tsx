import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bekama Dawit - Visual Artist & Graphic Designer | Creative Portfolio",
  description:
    "Passionate Visual Artist and Graphic Designer with 2+ years experience. Specializing in character design, branding, storyboards, and digital illustrations. Transforming narratives into captivating visuals.",
  keywords: [
    "Bekama Dawit",
    "Visual Artist",
    "Graphic Designer",
    "Character Design",
    "Digital Art",
    "Illustration",
    "Storyboard",
    "Branding",
    "Creative Design",
    "Portfolio",
    "Digital Portraits",
    "Traditional Paintings",
    "Art Assets",
    "Creative Solutions",
    "Design Professional",
  ],
  authors: [{ name: "Bekama Dawit" }],
  creator: "Bekama Dawit",
  publisher: "Bekama Dawit",
  category: "Art & Design",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bekama-dawit.vercel.app",
    siteName: "Bekama Dawit - Visual Artist Portfolio",
    title: "Bekama Dawit - Visual Artist & Graphic Designer",
    description:
      "Explore the creative portfolio of Bekama Dawit, a passionate Visual Artist specializing in character design, digital illustrations, and brand storytelling.",
    images: [
      {
        url: "/bekama_dawit.jpeg",
        width: 1200,
        height: 630,
        alt: "Bekama Dawit - Visual Artist Portfolio Preview",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bekama Dawit",
    jobTitle: "Visual Artist & Graphic Designer",
    description:
      "Passionate Visual Artist and Graphic Designer with over two years of experience specializing in character design, digital illustrations, and brand storytelling.",
    url: "https://bekama-dawit.vercel.app",
    image: "https://bekama-dawit.vercel.app/bekama_dawit.jpeg",
    email: "Bekamadawit@gmail.com",
    telephone: "+251937667595",
    knowsAbout: [
      "Visual Arts",
      "Graphic Design",
      "Character Design",
      "Digital Illustration",
      "Storyboard Creation",
      "Brand Identity",
      "Creative Direction",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Visual Artist",
      occupationLocation: {
        "@type": "Place",
        name: "Ethiopia",
      },
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "PANA Communications",
      },
      {
        "@type": "Organization",
        name: "YOT Technologies",
      },
      {
        "@type": "Organization",
        name: "Topia",
      },
    ],
    sameAs: [
      "https://instagram.com/buzz_bkm/",
      "https://web.telegram.org/k/#@Buzz_bkm",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
