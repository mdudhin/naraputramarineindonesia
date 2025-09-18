import React from "react";
import { appData } from "../data";
import MotionSection from "../components/MotionSection";

// Import the icons you need from lucide-react
import { Package, Tag, Megaphone, MapPin } from "lucide-react";

const ServicesPage: React.FC = () => {
  const marketingMix = [
    {
      id: "product",
      icon: Package,
      title: appData.product.title,
      content: (
        <ul className="space-y-3 text-gray-600 list-disc list-inside">
          {appData.product.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "price",
      icon: Tag,
      title: appData.price.title,
      content: (
        <div className="space-y-4">
          {appData.price.items.map((item, i) => (
            <div key={i} className="text-left">
              <h3 className="font-semibold text-gray-700">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "promotion",
      icon: Megaphone,
      title: appData.promotion.title,
      content: (
        <ul className="space-y-3 text-gray-600 list-disc list-inside">
          {appData.promotion.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "place",
      icon: MapPin,
      title: appData.place.title,
      content: (
        <>
          <p className="text-gray-600">{appData.place.description}</p>
          <ul className="space-y-3 text-gray-600 list-disc list-inside mt-3">
            {appData.place.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600 mt-4 font-semibold">
            {appData.place.potential}
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* --- HERO SECTION (Unchanged) --- */}
      <MotionSection className="relative bg-gray-800 text-white py-32 sm:py-44 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1727843506000-e4e3c2b03b0d?q=80&w=2056&auto=format&fit=crop"
            alt="Logistics"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-serif">
            Our Business Strategy
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive approach to providing superior energy logistics.
          </p>
        </div>
      </MotionSection>

      {/* --- ENHANCED UI SECTION (USING BRAND COLORS) --- */}
      <MotionSection className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {marketingMix.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Updated with brand colors */}
                <div className="bg-[#049CAB30] p-4 rounded-full mb-6 inline-flex">
                  <item.icon className="h-10 w-10 text-bondi-blue" />
                </div>
                <h2 className="text-3xl font-serif text-gray-800 mb-4">
                  {item.title}
                </h2>
                <div className="text-left w-full">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* --- MARKETING PLAN SECTION (USING BRAND COLORS) --- */}
      <MotionSection className="py-16 sm:py-24 bg-[#049CAB1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
            {appData.marketingPlan.title}
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {appData.marketingPlan.points.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <div className="bg-bondi-blue text-white p-3 rounded-full">
                  <point.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-medium text-gray-700">{point.title}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default ServicesPage;
