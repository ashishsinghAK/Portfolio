import Intro from "./Component/Intro"
import Navbar from "./Component/Navbar"
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact"
import Skills from "./Component/Skills";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration:1.2,
      easing:(t)=> Math.min(1,1.001-Math.pow(2,-10*t)),
      smoothWheel:true
    })

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
    
  },[])
  return (
    <div className="flex justify-center m-auto overflow-x-hidden overflow-y-hidden
    bg-gradient-to-l from-black to-gray-900">
      <div className="w-[90vw] flex flex-col gap-[4em] items-center ">
        <Navbar />
        <Intro />
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;
