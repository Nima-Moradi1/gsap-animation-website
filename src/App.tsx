import gsap from "gsap"
import { ScrollTrigger , SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

// DO NOT FORGET to register the plugins before using them
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for fonts and assets to be ready (simulate with setTimeout)
    const waitForFonts = async () => {
    await document.fonts.ready;
    }
    const timeout = setTimeout(() => {
      setIsLoading(false);

      // Trigger entrance animations here
      gsap.fromTo(
        "#page-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      );
      waitForFonts()
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    {
      isLoading ? <Loader />  :
    
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
    }
  </>
  )
}

export default App
