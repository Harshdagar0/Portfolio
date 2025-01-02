import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skill from "./components/Skill"
import Contact from "./components/Contact"
import { motion } from "motion/react"

export default function App() {
  return (
    <div className="text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className=" absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      </div>
      <div className="container overflow-hidden">
        <Navbar />
        <Hero  animate={{ rotate: 360 }}/>
        <hr className="opacity-20"></hr>
        <About />
        <hr className="opacity-20"></hr>
        <Skill />
        <hr className="opacity-20"></hr>
        <Experience />
        <hr className="opacity-20"></hr>
        <Project />
        <hr className="opacity-20"></hr>
        <Contact />
        <hr className="opacity-20"></hr>
      </div>


    </div>
  )
}