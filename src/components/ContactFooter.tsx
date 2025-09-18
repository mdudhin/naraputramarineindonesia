import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import type { Page } from "../data";

interface ContactFooterProps {
  setCurrentPage: (page: Page) => void;
}

const ContactFooter: React.FC<ContactFooterProps> = React.memo(({}) => (
  <footer id="contact" className="relative bg-gray-100 text-gray-700">
    <div className="absolute inset-0 opacity-10">
      <img
        src="https://images.unsplash.com/photo-1601631547769-71df77d1037b?q=80&w=1974"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Contact Info and Form Grid */}
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="font-bold">Phone Number</p>
          <p>+62 812 2060 40</p>
          <p className="mt-4 font-bold">Email</p>
          <p>naraputramarineind@gmail.com</p>
          <p className="mt-4 font-bold">Address</p>
          <p>
            Jl. Lettu Karim Kadir, Gandus, Kec. Gandus, Kota Palembang, Sumatera
            Selatan 30149
          </p>

          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/naraputramarineindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bondi-blue transition-transform hover:scale-110"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="hover:text-bondi-blue transition-transform hover:scale-110"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-bondi-blue transition-transform hover:scale-110"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="hover:text-bondi-blue transition-transform hover:scale-110"
            >
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg mb-4 text-center md:text-left">
            Get Started
          </h3>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-b border-gray-400 focus:border-bondi-bondi-blueline-none py-2 transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-gray-400 focus:border-bondi-bondi-blueline-none py-2 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-gray-400 focus:border-bondi-bondi-blueline-none py-2 transition"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent border-b border-gray-400 focus:border-bondi-bondi-blueline-none py-2 transition"
              />
            </div>
            <textarea
              placeholder="Leave us a message..."
              rows={3}
              className="w-full mt-4 bg-transparent border-b border-gray-400 focus:border-bondi-bondi-blueline-none py-2 transition"
            ></textarea>
            <button
              type="submit"
              className="mt-6 border border-gray-400 px-8 py-2 hover:bg-bondi-blue hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-16">
        <h3 className="font-semibold text-lg mb-4 text-center md:text-left">
          Our Location
        </h3>
        <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.303720755346!2d104.7048329!3d-3.0127846999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9f3254c306ed%3A0xbd77b993cd8b97c!2sPT.%20Naraputra%20Marine%20Indonesia!5e0!3m2!1sen!2sid!4v1754133169510!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PT Naraputra Marine Indonesia Location"
          ></iframe>
        </div>
      </div>
    </div>
    <div className="bg-[#049CAB30] py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-black text-sm">
        <p>
          © {new Date().getFullYear()} PT Naraputra Marine Indonesia. All Rights
          Reserved.
        </p>
      </div>
    </div>
  </footer>
));

export default ContactFooter;
