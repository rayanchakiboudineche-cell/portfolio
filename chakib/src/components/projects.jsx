import { useState } from "react";
import Reveal from "./reveal";

// ✏️ CHANGE YOUR GITHUB LINK HERE
const GITHUB = "https://github.com/rayanchakiboudineche-cell";

const projects = [
  {
    img: "/img/projects/pro1.jpg",
    icon: "🎮",
    title: "Coming Soon",
    desc: "A small game built with JavaScript. Replace this text with your own description.",
    tags: ["JavaScript", "Canvas"],
    demo: "#",   // ✏️ live link
    code: "#",   // ✏️ GitHub repo link
  },
  {
    img: "/img/projects/pro2.jpg",
    icon: "💻",
    title: "Portfolio Website",
    desc: "This animated portfolio built with React and Vite.",
    tags: ["React", "CSS"],
    demo: "#",
    github: "https://github.com/rayanchakiboudineche-cell/portfolio",
  },
  {
    img: "/img/projects/pro3.jpg",
    icon: "🚀",
    title: "itc-hub",
    desc: "A full-stack project with front end, back end and deployment.",
    tags: ["Node.js", "DevOps"],
    demo: "#",
    github: "https://github.com/rayanchakiboudineche-cell/itc-hub",
  },
];

function ProjectImage({ src, icon, alt }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="project-img">
      {ok ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />
      ) : (
        <div className="project-placeholder">{icon}</div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="title">Projects</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="card project-card">
              <ProjectImage src={p.img} icon={p.icon} alt={p.title} />
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer">Live ↗</a>
                  <a href={p.github} target="_blank" rel="noreferrer">github ↗</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="card gold-card github-card">
          <div className="gold-glow" />
          <h3>More on GitHub</h3>
          <p>All my projects, experiments and games live here.</p>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="btn">
            View GitHub <span className="arrow">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;