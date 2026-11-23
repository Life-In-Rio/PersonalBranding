import { motion } from "framer-motion";

import FloatingSymbol from "../Components/floatingsymbol";

import {
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiGithub
} from "react-icons/si";

function Hero() {
  return (
    <section className="hero stacked-section" id="home">
      <div className="hero-circle"></div>
      <div className="hero-orbit"></div>

      <div className="floating-logos">
        <FloatingSymbol className="symbol-tailwind">
          <SiTailwindcss />
        </FloatingSymbol>

        <FloatingSymbol className="symbol-html">
          <SiHtml5 />
        </FloatingSymbol>

        <FloatingSymbol className="symbol-css">
          <SiCss />
        </FloatingSymbol>

        <FloatingSymbol className="symbol-js">
          <SiJavascript />
        </FloatingSymbol>

        <FloatingSymbol className="symbol-react">
          <SiReact />
        </FloatingSymbol>

        <FloatingSymbol className="symbol-github">
          <SiGithub />
        </FloatingSymbol>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8
          }}
        >
          WEB DEVELOPER <span>·</span> INDONESIA
        </motion.p>

        <h1>
          Building digital
          <br />
          <span>experiences.</span>
        </h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.8
          }}
        >
          I create clean, responsive, and user-friendly
          websites by turning ideas into digital experiences.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8
          }}
        >
          <a href="#projects" className="button-primary">
            Explore My Work
          </a>

          <a
            href="#projects"
            className="button-circle"
            aria-label="Explore projects"
          >
            <span>↓</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;