import Reveal from "../Components/reveal";

import {
  SiReact,
  SiFlutter,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiDart,
  SiGit,
  SiNetlify,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { ArrowUpRight, Globe } from "lucide-react";

const projects = [
  {
    name: "TaskFlow",
    category: "React.js",
    description:
      "A task management dashboard to organize daily activities and track productivity.",
    status: "Completed",
    site: "https://taskssflow.netlify.app/",
    github: "https://github.com/Life-In-Rio/To-Do-App",
  },
  {
    name: "BMI Calculator",
    category: "React.js",
    description:
      "A simple BMI calculator to calculate and understand body mass index.",
    status: "Completed",
    site: "https://bmii-calculate.netlify.app/",
    github: "https://github.com/Life-In-Rio/BMI_calculator",
  },
  {
    name: "Finance Tracker",
    category: "React.js",
    description:
      "A personal finance application to manage income and expenses.",
    status: "Completed",
    site: "https://fnance-tracker.netlify.app/",
    github: "https://github.com/Life-In-Rio/Finance-trecker2.0",
  },
  {
    name: "Barakah App",
    category: "Flutter",
    description:
      "An Islamic application with prayer times, daily duas, and bookmarks.",
    status: "Completed",
    site: "",
    github: "https://github.com/Life-In-Rio/Barakah-App",
  },
  {
    name: "Note App",
    category: "Flutter",
    description:
      "A Flutter application for creating and managing personal notes.",
    status: "Completed",
    site: "",
    github: "https://github.com/Life-In-Rio/Note-app-Application",
  },
  {
    name: "Telephone Data",
    category: "Flutter",
    description:
      "A Flutter project for managing telephone contact data.",
    status: "Completed",
    site: "",
    github: "https://github.com/Life-In-Rio/Data-Telephone-Application",
  },
];

const toolGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    tools: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
        bg: "rgba(227, 79, 38, 0.14)",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        color: "#1572B6",
        bg: "rgba(21, 114, 182, 0.14)",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#D4B800",
        bg: "rgba(247, 223, 30, 0.22)",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#00B8D9",
        bg: "rgba(97, 218, 251, 0.18)",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        bg: "rgba(6, 182, 212, 0.14)",
      },
    ],
  },
  {
    title: "Backend & Runtime",
    description: "Working with server-side JavaScript environments.",
    tools: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
        bg: "rgba(51, 153, 51, 0.14)",
      },
    ],
  },
  {
    title: "Mobile Development",
    description: "Creating applications for mobile devices.",
    tools: [
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "#02569B",
        bg: "rgba(2, 86, 155, 0.14)",
      },
      {
        name: "Dart",
        icon: SiDart,
        color: "#0175C2",
        bg: "rgba(1, 117, 194, 0.14)",
      },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Writing code, managing versions, and deploying projects.",
    tools: [
      {
        name: "VS Code",
        icon: VscCode,
        color: "#007ACC",
        bg: "rgba(0, 122, 204, 0.14)",
      },
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        bg: "rgba(240, 80, 50, 0.14)",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#181717",
        bg: "rgba(24, 23, 23, 0.12)",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
        bg: "rgba(0, 199, 183, 0.15)",
      },
    ],
  },
];

function Projects() {
  const marqueeProjects = [...projects, ...projects];

  return (
    <>
      {/* PROJECT SHOWCASE */}
      <section
        className="content-section projects-section stacked-section"
        id="projects"
      >
        <div className="section-inner">
          <Reveal>
            <p className="section-label">02 / SELECTED WORK</p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2>
              Things I've been
              <br />
              <span>building.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="section-description">
              A collection of projects, experiments, and things
              I've learned along the way.
            </p>
          </Reveal>
        </div>

        <div className="projects-marquee">
          <div className="projects-track">
            {marqueeProjects.map((project, index) => (
              <article
                className="project-card"
                key={`${project.name}-${index}`}
              >
                <div>
                  <div className="project-tech">
                    <div
                      className={`project-tech-icon ${
                        project.category === "Flutter"
                          ? "flutter-icon"
                          : "react-icon"
                      }`}
                    >
                      {project.category === "Flutter" ? (
                        <SiFlutter />
                      ) : (
                        <SiReact />
                      )}
                    </div>

                    <span>{project.category}</span>
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-card-bottom">
                  <span className="project-status">
                    {project.status}
                  </span>

                  <div className="project-actions">
                    {project.site && (
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Globe size={15} />
                        View Site
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <SiGithub size={15} />
                        View GitHub
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section
        className="content-section tools-panel-section stacked-section"
        id="tools"
      >
        <div className="tools-section">
          <Reveal>
            <div className="tools-heading">
              <p className="section-label">03 / MY TECH STACK</p>

              <h2>
                Tools & <span>technologies.</span>
              </h2>

              <p>
                The technologies and tools I use to build
                my projects and bring ideas to life.
              </p>
            </div>
          </Reveal>

          <div className="tools-grid">
            {toolGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="tools-card">
                  <h3>{group.title}</h3>

                  <p>{group.description}</p>

                  <div className="tools-list">
                    {group.tools.map((tool) => {
                      const Icon = tool.icon;

                      return (
                        <div
                          className="tool-item"
                          key={tool.name}
                          style={{
                            "--brand-color": tool.color,
                            "--brand-bg": tool.bg,
                          }}
                        >
                          <Icon />
                          <span>{tool.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;