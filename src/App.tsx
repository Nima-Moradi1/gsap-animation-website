import gsap from "gsap"
import { ScrollTrigger , SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

// DO NOT FORGET to register the plugins before using them
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {


  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App
