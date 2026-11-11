import Reveal from "./reveal";

function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="title">Projects</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="card gold-card">
          <div className="gold-glow" />
          <h3>My GitHub</h3>
          <p>
            All my projects, experiments and games live here. Check out my
            code and follow my progress.
          </p>

          {/* ✏️ PUT YOUR GITHUB LINK HERE (replace the # below) */}
          <a href="#" target="_blank" rel="https://github.com/rayanchakiboudineche-cell" className="btn">
            View GitHub <span className="arrow">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;