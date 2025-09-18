import React from "react";
import { appData, type Page } from "../data";
import MotionSection from "../components/MotionSection";
import NewBuild from "../components/page-specific/NewBuild";

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative h-screen w-full flex items-center justify-center sm:justify-start text-white overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1601631547769-71df77d1037b?q=80&w=2940&auto=format&fit=crop"
        alt="Coal Transportation Ship"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
    </div>
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tight animate-fade-in-down">
        Naraputra Marine Indonesia
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg mx-auto sm:mx-0 animate-fade-in-up">
        Your Trusted Partner in Coal Transportation and Shipping.
      </p>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
      <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
);

const Introduction: React.FC = () => (
  <MotionSection className="py-16 sm:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 text-center lg:text-left">
            Welcome to PT Naraputra Marine Indonesia
          </h2>
        </div>
        <div className="lg:col-span-3 text-gray-600 leading-relaxed space-y-4">
          <p>{appData.introduction.text.split(". ")[0]}.</p>
          <p>{appData.introduction.text.split(". ").slice(1).join(". ")}</p>
        </div>
      </div>
    </div>
  </MotionSection>
);

// const ServicesHighlight: React.FC = () => (
//   <MotionSection className="py-16 sm:py-24 bg-gray-100">
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//       <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
//         {appData.ourServices.title}
//       </h2>
//       <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
//         {appData.ourServices.description}
//       </p>
//       <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {appData.ourServices.items.slice(0, 3).map((service, index) => (
//           <div
//             key={index}
//             className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
//           >
//             <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   </MotionSection>
// );

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => (
  <>
    <Hero />
    <Introduction />
    <NewBuild setCurrentPage={setCurrentPage} />
  </>
);

export default HomePage;
