"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { myDetails } from "../../../assets/myDetails";
import "../css/mainNavbar.css";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Services", link: "/services" },
    { id: 4, text: "Projects", link: "/projects" },
    { id: 5, text: "Blog", link: "/blogs" },
    { id: 6, text: "Contact", link: "/contact" },
  ];

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 lg:flex lg:justify-center text-white w-full">
      <div className="flex justify-between px-4 items-center w-full ">
        <div className="md:grid md:grid-rows-[auto] w-full">
          <div className="flex justify-between items-center md:mx-[5%] mx-[2%]">
            <div className="flex m-6 rounded-xl md:px-4 md:p-0 p-2 md:rounded-lg transition-transform duration-300 hover:scale-105">
              <div className="justify-center hidden md:flex content-center">
                <Image
                  src="/logo.webp"
                  width={35}
                  height={35}
                  alt="logo"
                  className="m-4 ghi"
                />
              </div>
              <div
                className="justify-center content-center lg:text-xl text-lg hover:font-semibold duration-100"
                href="/"
              >
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myDetails.email}&su=${myDetails.emailSubject}y&body=Dear%20${myDetails.firstname},%0D%0A%0D%0A${myDetails.sampleEmailMessage}.%0D%0A%0D%0A${myDetails.emailComplimentaryClose},%0D%0A%0D%0A${myDetails.emailUserName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {myDetails.email}
                </a>
              </div>
            </div>

            <div className="hidden min-w-[50%] lg:flex  ">
              <div className="w-full flex justify-evenly ">
                {links.map((link) => (
                  <div key={link.id}>
                    <a
                      href={link.link}
                      className=" text-lg hover:text-[--hover-button] transition-all hover:text-xl hover:scale-125 duration-300 linkIconsBorder  "
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex">
              <div className="py-3 px-8 rounded-3xl hover:cursor-pointer hireMeButton transition-all duration-300 ">
                Hire Me!
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-10 h-12 ${
                isMenuOpen ? "hidden" : "block"
              } hover:text-[--hover-button] transition-all hover:scale-125 duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <button
            className="lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-10 h-12 ${
                isMenuOpen ? "block" : "hidden"
              } hover:text-red-600 transition-all hover:scale-125 duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* MOBILE VIEW */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="flex flex-col py-6 space-y-4 md:px-10 lg:hidden "
        >
          {links.map((link) => (
            <div key={link.id}>
              <a
                href={link.link}
                className="text-white text-lg pl-6 hover:text-[--hover-button] transition-all hover:text-xl hover:scale-125 duration-300"
              >
                {link.text}
              </a>
              <hr className="w-full border-gray-200 border-t-1 my-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
