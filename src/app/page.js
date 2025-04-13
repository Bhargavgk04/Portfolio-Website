import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer.jsx";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AchievementSection/>
        <AboutSection />
        <ProjectsSection/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
