import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer.jsx";
import AchievementSection from "./components/AchievementSection";
import ScrollToTop from "./components/ScrollToTop";
import SkillsSection from "./components/SkillsSection";
import Reveal from "./components/Reveal";

export const metadata = {
  title: "Bhargav Katkam - Portfolio",
  description: "Full Stack Developer Portfolio showcasing projects and skills",
  keywords: ["Full Stack Developer", "Web Development", "React", "Node.js", "Portfolio"],
  icons: {
    icon: '/favicon.svg',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal delay={0.05}>
          <AchievementSection />
        </Reveal>
        <Reveal delay={0.1}>
          <AboutSection />
        </Reveal>
        <Reveal delay={0.15}>
          <SkillsSection />
        </Reveal>
        <Reveal delay={0.2}>
          <ProjectsSection />
        </Reveal>
        <Reveal delay={0.25}>
          <EmailSection />
        </Reveal>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
