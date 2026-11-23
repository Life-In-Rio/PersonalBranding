import { useEffect, useState } from "react";

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import LoadingScreen from "./Components/loadingscreen";
import StackPage from "./Components/StackPage";

import Hero from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const originalTitle = "B.E Profile.";
    document.title = originalTitle;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Comeback 👋";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar />

          <main className="home-content">
            {/* LAYER 1: Hero */}
            <StackPage zIndex={1} className="stack-page-1">
              <Hero />
            </StackPage>

            {/* LAYER 2: About */}
            <StackPage zIndex={2} className="stack-page-2">
              <About />
            </StackPage>

            {/* LAYER 3: Projects + Tech Stack */}
            <StackPage zIndex={3} className="stack-page-3">
              <Projects />
            </StackPage>

            {/* LAYER 4: Contact + Signature Footer */}
            <div
              className="stack-page stack-page-4"
              style={{ position: "relative", zIndex: 4 }}
            >
              <Footer />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;