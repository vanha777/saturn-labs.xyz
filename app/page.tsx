import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/consumer";
import Projects from "./components/projects";
import Footer from "./components/ui/footer";
import MainHero from "./components/ui/mainPage2";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <MainHero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}