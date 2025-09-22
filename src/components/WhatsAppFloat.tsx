import React from "react";

const WhatsAppFloat: React.FC = React.memo(() => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/62812206040", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <img 
        src="/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-6 h-6"
      />
    </button>
  );
});

export default WhatsAppFloat;
