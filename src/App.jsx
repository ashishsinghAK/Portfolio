import Intro from "./Component/Intro"
import Navbar from "./Component/Navbar"
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact"

function App() {
  return (
    <div className="flex justify-center m-auto overflow-x-hidden overflow-y-hidden">
      <div className="w-[90vw] flex flex-col gap-[4em] items-center">
        <Navbar />
        <Intro />
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;
