"use client";
import React, { useEffect, useRef, useState } from "react";
import { myDetails } from "../../../assets/myDetails";
import { navBarLinks } from "../../../assets/navBarDetails";
import "../css/mainNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faD } from "@fortawesome/free-solid-svg-icons";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = navBarLinks;

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
    <div
      className={`fixed top-0 left-0 right-0  z-50 pt-4 w-full ${
        isMenuOpen && "fixed-purple-bg"
      }`}
    >
      <div className="flex justify-between px-4 lg:px-0 items-center w-full ">

        <div className="md:grid md:grid-rows-[auto] w-full text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">

          <div className="flex justify-between items-center 2xl:px-[3%] md:mx-[5%] mx-[2%]">

            <div className="flex gap-2 items-center">

              <div className="hidden md:flex bg-[--navbar-logo-bg] hover:bg-[--navbar-logo-bg-hover] text-[--navbar-logo-text] hover:text-[--navbar-logo-text-hover] p-2 px-3 rounded-full transition-all duration-500 hover:scale-110">
                <FontAwesomeIcon icon={faD} />
              </div>

              <div
                className=" hover:text-[--navbar-email-hover] text-[--navbar-email] md:text-xl xl:text-2xl 2xl:text-3xl hover:font-semibold transition-all duration-500"
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

            <div className="hidden min-w-[50%] lg:flex">
              <div className="w-full flex gap-6 justify-evenly">
                {links.map((link) => (
                  <div key={link.id}>
                    <a
                      href={link.link}
                      className="text-[--navbar-link-text] hover:text-[--navbar-link-text-hover] hover:font-black transition-all hover:scale-125 duration-300 linkIconsBorder "
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="main-navbar-btn py-3 px-8 rounded-3xl hover:cursor-pointer]">
                Hire Me!
              </div>
            </div>
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
              className={`w-10 h-12 md:w-16 md:h-20 ${
                isMenuOpen ? "hidden" : "block"
              } hover:text-[--navbar-responsive-icon-show-hover] text-[--navbar-responsive-icon-show] transition-all hover:scale-125 duration-300`}
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
              className={`w-10 h-12 md:w-16 md:h-20 ${
                isMenuOpen ? "block" : "hidden"
              } text-[--navbar-responsive-icon-hide] hover:text-[--navbar-responsive-icon-hide-hover] transition-all hover:scale-125 duration-300`}
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
                className="text-xl pl-6 font-semibold hover:text-[--navbar-responsive-menu-hover] text-[--navbar-responsive-menu] transition-all hover:text-2xl hover:scale-125 duration-300"
              >
                {link.text}
              </a>
              <hr className="w-full border-[--navbar-responsive-menu-border] border-t-1 my-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
