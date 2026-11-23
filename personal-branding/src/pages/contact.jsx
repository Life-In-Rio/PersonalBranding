
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const letters = ["C", "O", "N", "N", "E", "C", "T"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`content-section contact-section stacked-section ${
        isVisible ? "contact-visible" : ""
      }`}
      id="contact"
    >
      <div className="contact-inner">
        <p className="section-label contact-reveal" style={{ "--delay": "0s" }}>
          03 / GET IN TOUCH
        </p>

        <div className="contact-heading">
          <h2 className="contact-reveal" style={{ "--delay": "0.15s" }}>
            Have a project
            <br />
            in mind?
          </h2>

          <p className="contact-reveal" style={{ "--delay": "0.3s" }}>
            Let's create something meaningful together.
            I'm always open to new ideas, projects, and opportunities.
          </p>
        </div>

        <div className="contact-connect">
          <span className="connect-caption contact-reveal">
            LET'S GET IN TOUCH
          </span>

          <h3 aria-label="CONNECT">
            {letters.map((letter, index) => (
              <span
                className="connect-letter"
                key={index}
                style={{ "--letter-index": index }}
              >
                {letter}
              </span>
            ))}
            <span className="connect-dot">.</span>
          </h3>
        </div>

        <div
          className="contact-bottom contact-reveal"
          style={{ "--delay": "0.65s" }}
        >
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="contact-talk-button"
          >
            <Mail size={18} />
            Let's Talk
            <ArrowUpRight className="contact-button-arrow" size={18} />
          </a>

          <a
            href="https://github.com/Life-In-Rio"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <SiGithub size={17} />
            GitHub
            <ArrowUpRight className="contact-social-arrow" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
