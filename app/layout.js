import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/components/NavBar";
import CustomCursor from "./customCursor/CustomCursor";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import NewNavBar from "./components/NewNavBar";
// import CustomCursor from "./CustomCursor ";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pasindu Dilshan",
  description: "My Portfolio Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="fixed z-50">
            <Navbar />
          </div>
          <div>
            <CustomCursor />
          </div>
          <div>
            <div className="relative text-black mt-40">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
