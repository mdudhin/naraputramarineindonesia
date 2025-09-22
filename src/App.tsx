import { useState, useEffect, Suspense, lazy } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContactFooter from "./components/ContactFooter";
import WhatsAppFloat from "./components/WhatsAppFloat";
import type { Page } from "./data";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

const LoadingSpinner = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-bondi-blue"></div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleSetPage = (page: Page) => {
    if (page === currentPage && page !== "contact") return;

    if (page === "contact") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setIsAnimatingOut(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimatingOut(false);
    }, 400);
  };

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={handleSetPage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      default:
        return <HomePage setCurrentPage={handleSetPage} />;
    }
  };

  return (
    <div className="bg-white font-sans">
      <Header 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={handleToggleSidebar} 
      />
      <main
        className={`transition-opacity duration-400 ${
          isAnimatingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <Suspense fallback={<LoadingSpinner />}>{renderPage()}</Suspense>
      </main>
      <ContactFooter />
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={handleSetPage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <WhatsAppFloat />
    </div>
  );
}
