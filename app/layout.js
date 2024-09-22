'use client'
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/components/NavBar";
import CustomCursor from "./customCursor/CustomCursor";
import Loading from "./loading/components/Loading";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
config.autoAddCss = false; // Prevent Font Awesome from adding CSS automatically

// Import metadata from the new metadata.js file
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className={inter.className}>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="absolute z-20">
                <Navbar />
              </div>
              <div>
                <CustomCursor />
              </div>
              <div>
                <div className="relative text-black mt-40">{children}</div>
              </div>
            </>
          )}
        </div>
      </body>
    </html>
  );
}
