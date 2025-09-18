import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logo_white.png";

const Header: React.FC = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              window.location.reload();
            }}
            className="flex-shrink-0"
          >
            <div
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } transition-colors duration-300`}
            >
              <img
                src={isScrolled ? logo : logoWhite}
                alt="Logo NPMI"
                className="w-20"
              />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
});

export default Header;
