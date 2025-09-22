import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const ContactFooter: React.FC = React.memo(() => (
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
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="text-center lg:text-left animate-fade-in-left">
          <h3 className="font-semibold text-xl mb-6 gradient-text">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-2">
              <p className="font-bold text-bondi-blue">Phone Number</p>
              <p className="text-gray-700">+62 812 2060 40</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-2">
              <p className="font-bold text-bondi-blue">Email</p>
              <p className="text-gray-700 break-all">naraputramarineind@gmail.com</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-2">
              <p className="font-bold text-bondi-blue">Address</p>
              <p className="text-gray-700 text-sm sm:text-base">
                Jl. Lettu Karim Kadir, Gandus, Kec. Gandus, Kota Palembang, Sumatera
                Selatan 30149
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
            <a
              href="https://www.instagram.com/naraputramarineindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-bondi-blue hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-bondi-blue hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-bondi-blue hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-bondi-blue hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 animate-fade-in-right">
          <h3 className="font-semibold text-2xl mb-6 text-center lg:text-left gradient-text">
            Our Location
          </h3>
          <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.303720755346!2d104.7048329!3d-3.0127846999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9f3254c306ed%3A0xbd77b993cd8b97c!2sPT.%20Naraputra%20Marine%20Indonesia!5e0!3m2!1sen!2sid!4v1754133169510!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PT Naraputra Marine Indonesia Location"
              className="rounded-xl"
            ></iframe>
          </div>
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
