import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Bhargav's Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#121212] min-h-screen" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
