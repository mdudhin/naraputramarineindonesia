import React from "react";
import { appData, type Page } from "../data";

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = React.memo(
  ({ currentPage, setCurrentPage, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <>
        <div className="fixed top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
          <div className="relative w-64 md:w-20 h-full flex flex-col justify-center">
            <nav className="flex flex-col bg-black/60 backdrop-blur-md justify-center rounded-tl-2xl rounded-bl-2xl">
              {appData.sidebarLinks.map((link, index) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    setCurrentPage(link.page);
                    onClose();
                  }}
                  className={`group relative flex ${
                    index === 0 ? "rounded-tl-2xl" : ""
                  } ${
                    index === appData.sidebarLinks.length - 1
                      ? "rounded-bl-2xl"
                      : ""
                  } items-center justify-start md:justify-center w-full h-20 pl-8 md:pl-0 transition-colors duration-300 ${
                    currentPage === link.page
                      ? "text-white bg-bondi-blue"
                      : "text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <link.icon size={24} />
                  <span className="absolute right-full mr-4 px-3 py-2 bg-bondi-blue text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                    {link.name}
                  </span>
                  <span className="ml-4 md:hidden">{link.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
        ></div>
      </>
    );
  }
);

export default Sidebar;
