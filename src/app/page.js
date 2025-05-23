import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer.jsx";
import AchievementSection from "./components/AchievementSection";
import ScrollToTop from "./components/ScrollToTop";
import SkillsSection from "./components/SkillsSection";

export const metadata = {
  title: "Bhargav Katkam - Portfolio",
  description: "Full Stack Developer Portfolio showcasing projects and skills",
  keywords: ["Full Stack Developer", "Web Development", "React", "Node.js", "Portfolio"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
