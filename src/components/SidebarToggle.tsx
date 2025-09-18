import React from "react";
import { Menu, X } from "lucide-react";

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = React.memo(
  ({ isOpen, onToggle }) => (
    <button
      onClick={onToggle}
      className={`fixed top-4 right-6 z-999 h-12 w-12 flex items-center justify-center bg-black/40 rounded-full text-white hover:bg-black/60 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Navigation"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  )
);

export default SidebarToggle;
