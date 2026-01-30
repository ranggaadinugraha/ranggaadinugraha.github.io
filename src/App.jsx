import { useEffect, useState } from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";

import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Work } from "./components/sections/Work";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Organization } from "./components/sections/Organization";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`relative z-10 min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <Home isLoaded={isLoaded} />
          <About isLoaded={isLoaded} />
          <Work isLoaded={isLoaded} />
          <Projects isLoaded={isLoaded} />
          <Education isLoaded={isLoaded} />
          <Organization isLoaded={isLoaded} />
          <Contact isLoaded={isLoaded} />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;