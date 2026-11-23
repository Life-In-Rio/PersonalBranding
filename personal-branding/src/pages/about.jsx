
import Reveal from "../Components/reveal";

function About() {
  return (
    <section className="about-section content-section" id="about">
      <div className="about-container">
        <Reveal>
          <div className="about-image">
            <img src="/amba.png" alt="Abyan Eshan" />
          </div>
        </Reveal>

        <Reveal>
          <div className="about-content">
            <p className="about-label">ABOUT ME</p>

            <h2 className="about-title">
              A little about <span>me.</span>
            </h2>

            <p className="about-description">
              Hi, I'm <span className="highlight-name">Abyan</span>, an aspiring
              Web Developer who enjoys creating{" "}
              <span className="highlight-skill">clean</span>,
              <span className="highlight-skill"> responsive</span>, and
              <span className="highlight-skill"> user-friendly websites</span>.
              I can{" "}
              <span className="highlight-skill">read and understand code</span>,
              and I'm always eager to explore new technologies. Currently, I'm
              expanding my knowledge by learning
              <span className="highlight-python"> Python</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
