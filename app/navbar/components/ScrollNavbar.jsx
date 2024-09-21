"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { myDetails } from "../../../assets/myDetails";
import { navBarLinks } from "../../../assets/navBarDetails";
import "../css/scrollMobileNavbar.css";

const ScrollNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const links = navBarLinks;

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md p-4 z-50 text-white bg-black  shadow-lg shadow-[--shadow-color]">
      <div className="px-4 flex justify-between items-center lg:px-10  ">
        <div className="text-lg font-bold  rounded  focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 ">
          <div className="flex rounded-xl  md:rounded-lg transition-transform duration-300 hover:scale-105">
            <div className="justify-center hidden md:flex content-center">
              <Image
                src="/logo.webp"
                width={35}
                height={35}
                alt="logo"
                className="m-4"
              />
            </div>
            <div
              className="justify-center content-center lg:text-xl text-lg hover:font-semibold duration-100 hover:text-[--scroll-navbar-link-hover-start]"
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
        </div>

        <div className="hidden lg:flex space-x-10 lg:px-4">
          {links.map((link) => (
            <div key={link.id}>
              <a
                href={link.link}
                className=" hover:text-[#ffb237] hover:font-bold transition-all duration-500 hover:text-xl  ease-in-out linkIconsBorder  font-semibold"
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex">
          <div className="py-3 px-8 text-[--background] font-bold rounded-3xl hover:cursor-pointer hireMeButton transition-all duration-300 ">
            Hire Me!
          </div>
        </div>
        <div>
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-10 h-12 ${
                isMenuOpen ? "hidden" : "block"
              } hover:text-[--scroll-navbar-link-hover-start] transition-all hover:scale-125 duration-300`}
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

      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="flex flex-col py-6  space-y-4 md:px-10 lg:hidden"
        >
          {links.map((link) => (
            <div key={link.id}>
              <a
                href={link.link}
                className="text-lg pl-6 hover:text-[--scroll-navbar-link-hover-start] transition-all hover:text-xl hover:scale-125 duration-300"
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

export default ScrollNavBar;
