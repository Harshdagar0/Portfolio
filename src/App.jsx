import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-zinc-100 bg-zinc-950 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-44 left-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(251,146,60,0.12),transparent_35%)]"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skill />
          <Experience />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  );
}
