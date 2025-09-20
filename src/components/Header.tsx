import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logo_white.png";

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = React.memo(({ isSidebarOpen, onToggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              window.location.reload();
            }}
            className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
          >
            <div
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } transition-colors duration-300`}
            >
              <img
                src={isScrolled ? logo : logoWhite}
                alt="Logo NPMI"
                className="w-16 sm:w-20 h-auto"
              />
            </div>
          </a>
          
          {/* Sidebar Toggle Button */}
          <button
            onClick={onToggleSidebar}
            className={`h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ${
              isScrolled 
                ? "bg-gray-800/40 text-gray-800 hover:bg-gray-800/60" 
                : "bg-black/40 text-white hover:bg-black/60"
            } ${
              isSidebarOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-label="Toggle Navigation"
          >
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;
