import React from "react";
import { appData, type Page } from "../data";
import MotionSection from "../components/MotionSection";
import NewBuild from "../components/page-specific/NewBuild";

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => (
  <section
    id="home"
    className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1601631547769-71df77d1037b?q=80&w=2940&auto=format&fit=crop"
        alt="Coal Transportation Ship"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
    </div>
    
    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif tracking-tight leading-tight mb-6 animate-fade-in-down">
          <span className="block">Naraputra Marine</span>
          <span className="block gradient-text">Indonesia</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up">
          Your Trusted Partner in Coal Transportation and Shipping Services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <button 
            onClick={() => setCurrentPage("services")}
            className="bg-[#049CAB] hover:bg-[#038a9a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift cursor-pointer"
          >
            Our Services
          </button>
          <button 
            onClick={() => setCurrentPage("about")}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-lift cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-white/70 rounded-full"></div>
      </div>
    </div>
  </section>
);

const Introduction: React.FC = () => (
  <MotionSection className="py-16 sm:py-20 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 mb-6">
            Welcome to <span className="text-[#049CAB]">PT Naraputra Marine Indonesia</span>
          </h2>
          <div className="w-24 h-1 bg-[#049CAB] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-gray-50 p-6 rounded-lg hover-lift">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                {appData.mission}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-[#049CAB]/5 rounded-lg hover-lift">
                <div className="text-2xl font-bold text-[#049CAB] mb-2">2021</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center p-4 bg-[#049CAB]/5 rounded-lg hover-lift">
                <div className="text-2xl font-bold text-[#049CAB] mb-2">300ft</div>
                <div className="text-sm text-gray-600">Barge Capacity</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg hover-lift">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div className="bg-white p-4 rounded-lg border-l-4 border-[#049CAB]">
                  <p className="text-base sm:text-lg font-medium text-gray-800">
                    {appData.introduction.text.split(". ")[0]}.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm sm:text-base leading-relaxed">
                    {appData.introduction.text.split(". ")[1]}.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {appData.introduction.text.split(". ")[2]}.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {appData.introduction.text.split(". ")[3]}.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {appData.introduction.text.split(". ").slice(4).join(". ")}
                  </p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </MotionSection>
);


interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => (
  <div className="overflow-x-hidden">
    <Hero setCurrentPage={setCurrentPage} />
    <Introduction />
    <NewBuild setCurrentPage={setCurrentPage} />
  </div>
);

export default HomePage;
