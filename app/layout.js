"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./navbar/components/NavBar";
import CustomCursor from "./customCursor/CustomCursor";
import Loading from "./loading/components/Loading";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { metadata } from "./metadata";
import InitialLoading from "./loading/components/InitialLoading";

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
            <InitialLoading />
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
