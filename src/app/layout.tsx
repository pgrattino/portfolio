import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ClickSpark from "@/components/ClickSpark";
import CardNav from "@/components/CardNav/CardNav";
import LightRays from "@/components/LightRays/LightRays";
import Providers from "./providers";
// import { IoSettingsOutline } from "react-icons/io5";
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
  title: "Peyton Grattino's Portfolio",
  description: "Learn more about Peyton Grattino and the work he has done.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    {
      label: "Photography",
      bgColor: "#310928ff",
      textColor: "#fff",
      links: [
        {
          label: "My Work",
          href: "/photography",
          ariaLabel: "My Photography Works Link",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/peyton_g_photography/",
          ariaLabel: "Instagram Link",
        },
      ],
    },
    {
      label: "Development",
      bgColor: "#08330cff",
      textColor: "#fff",
      links: [
        {
          label: "My Work",
          href: "/development",
          ariaLabel: "My Development Works Link",
        },
        {
          label: "GitHub",
          href: "https://github.com/pgrattino",
          ariaLabel: "GitHub Link",
        },
      ],
    },
    {
      label: "About Me",
      bgColor: "#1e0a3bff",
      textColor: "#fff",
      links: [
        {
          label: "Resume",
          href: "/Peyton_Grattino_Resume.pdf",
          ariaLabel: "Resume Link",
        },
        {
          label: "Contact",
          href: "mailto:peyton.grattino@gmail.com",
          ariaLabel: "Contact Link",
        },
      ],
    },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
          <CardNav
            items={items}
            logoAlt="Company Logo"
            baseColor="#0d0d0d"
            menuColor="#fff"
            ease="power3.out"
          />
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Providers>{children}</Providers>
            <LightRays
              raysOrigin="bottom-center"
              raysColor="#eb6efe"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={0.9}
              followMouse={false}
              distortion={0.05}
              className="custom-rays"
            />
          </ClickSpark>
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
