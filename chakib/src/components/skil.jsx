import Reveal from "./reveal";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skills = [
  { logo: `${CDN}/html5/html5-original.svg`, name: "HTML", desc: "The structure of every web page. Clean, semantic layouts.", tags: ["Semantic", "Accessible"] },
  { logo: `${CDN}/css3/css3-original.svg`, name: "CSS", desc: "Styling, layouts and animations with a minimal approach.", tags: ["Flexbox", "Grid", "Animations"] },
  { logo: `${CDN}/javascript/javascript-original.svg`, name: "JavaScript", desc: "Logic and interactivity for websites and small games.", tags: ["ES6+", "DOM"] },
  { logo: `${CDN}/react/react-original.svg`, name: "React", desc: "Fast, reusable UI components for modern web apps.", tags: ["Hooks", "Components"] },
  { logo: `${CDN}/nodejs/nodejs-original.svg`, name: "Node.js", desc: "JavaScript on the server to build APIs and back-end logic.", tags: ["APIs", "Backend"] },
];

function Skil() {
  const glow = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <section id="skills" className="section">
      <Reveal>
        <h2 className="title">Skills</h2>
      </Reveal>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 100}>
            <div className="card skill-box" onMouseMove={glow}>
              <div className="skill-icon">
                <img src={s.logo} alt={`${s.name} logo`} loading="lazy" />
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className="tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skil;