import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
function Footer() {
  const footerRef = useRef(null);
  const nameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function handleLiquidMove(event) {
    const element = nameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const movement = Math.sqrt(event.movementX ** 2 + event.movementY ** 2);

    const intensity = Math.min(movement * 1.8, 35);

    element.style.setProperty("--liquid-x", `${x}px`);
    element.style.setProperty("--liquid-y", `${y}px`);
    element.style.setProperty("--liquid-scale", intensity);
  }

  function handleLiquidLeave() {
    const element = nameRef.current;

    if (!element) return;

    element.style.setProperty("--liquid-scale", "0");
    element.style.setProperty("--liquid-x", "-1000px");
    element.style.setProperty("--liquid-y", "-1000px");
  }

  function handleBackToTop(event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.pushState(null, "", "#home");
  }

  return (
    <footer
      className={`signature-footer ${isVisible ? "is-visible" : ""}`}
      id="contact"
      ref={footerRef}
    >
      <div className="signature-container">
        <div className="signature-top">
          <div className="signature-intro">
            <p className="signature-label">03 / GET IN TOUCH</p>

            <h2>
              Have a project
              <br />
              in mind?
            </h2>

            <p className="signature-description">
              I'm always open to new ideas, projects, and opportunities. Let's
              create something meaningful together.
            </p>
          </div>

          <div className="signature-connect">
            <span>LET'S GET IN TOUCH</span>

            <h3>
              CONNECT<span>.</span>
            </h3>

            <div className="signature-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=byanganteng007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={17} />
                <span>Let's Talk</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://github.com/Life-In-Rio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={17} />
                <span>GitHub</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.instagram.com/kebabbolong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram size={17} />
                <span>Instagram</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="signature-name-wrap"
          ref={nameRef}
          onPointerMove={handleLiquidMove}
          onPointerLeave={handleLiquidLeave}
        >
          <svg className="signature-filter" aria-hidden="true">
            <defs>
              <filter id="signature-liquid">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.015 0.04"
                  numOctaves="2"
                  seed="3"
                  result="noise"
                />

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="var(--liquid-scale, 0)"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>

          <h2 className="signature-name">
            ABYAN ESHAN<span>.</span>
          </h2>

          <h2 className="signature-name signature-name-liquid">
            ABYAN ESHAN<span>.</span>
          </h2>
        </div>

        <div className="signature-bottom">
          <span>DESIGNED & DEVELOPED BY</span>

          <span>© 2026 ABYAN ESHAN</span>

          <a href="#home" onClick={handleBackToTop}>
            BACK TO TOP
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
