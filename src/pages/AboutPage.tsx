import React from "react";
import { appData, orgChartData } from "../data";
import MotionSection from "../components/MotionSection";
import OrganizationChart from "../components/OrganizationChart";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <MotionSection className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2071&auto=format&fit=crop"
            alt="Ship at sea"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tight">
            About Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Learn about our commitment to excellence in the energy supply chain.
          </p>
        </div>
      </MotionSection>

      {/* Core Values Section */}
      <MotionSection className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
            Our Core Values
          </h2>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {appData.coreValues.map((item, index) => (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 p-6 rounded-lg"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="p-4 bg-[#049CAB30] text-bondi-blue rounded-full transition-all duration-300 group-hover:shadow-lg">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Our Mission Section */}
      <MotionSection className="relative py-24 sm:py-32 text-white overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1708900508431-1634a72cf89f?q=80&w=2940&auto=format&fit=crop"
            alt="Abstract energy visualization"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 container mx-auto md:py-18 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-serif text-white">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-slate-200 mt-6 mb-8"></div>
          <p className="text-lg leading-relaxed text-slate-200 max-w-4xl">
            {appData.mission}
          </p>
        </div>
      </MotionSection>

      {/* Our Vision Section */}
      <MotionSection className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-800">
              Our Vision
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We are dedicated to shaping a brighter, more sustainable future.
              Our vision is guided by these core principles:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appData.visionPoints.map((point, index) => (
              <div
                key={index}
                className="group bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-bondi-blue hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#049CAB30] text-bondi-blue rounded-lg p-3 group-hover:bg-bondi-blue group-hover:text-white transition-colors duration-300">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <p className="text-gray-700">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Our Partners Section */}
      <MotionSection className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
              Our Partners
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              Collaborating with industry leaders to deliver excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {appData.partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex justify-center items-center p-4 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12"
                />
                <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 text-sm font-medium text-bondi-blue bg-[#049CAB30] rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Our Organization Section */}
      <MotionSection className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
              Our Organization
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              The structure that drives our success.
            </p>
          </div>
          <div className="flex justify-center w-full overflow-x-auto">
            <OrganizationChart data={orgChartData} />
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default AboutPage;
