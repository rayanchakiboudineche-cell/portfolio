import Reveal from "./reveal";

const domains = [
  { img: "/img/game.jpg", title: "Game Development", desc: "My passion: building games and interactive worlds." },
  { img: "/img/front.jpg", title: "Front-End", desc: "Responsive, animated and user-friendly interfaces." },
  { img: "/img/back.jpg", title: "Back-End", desc: "APIs, servers and databases that power the web." },
  { img: "/img/dev.jpg", title: "DevOps", desc: "Automation, CI/CD and reliable workflows." },
  { img: "/img/depl.jpg", title: "Deployment", desc: "Putting projects online for the whole world." },
];

function Domains() {
  return (
    <section id="domains" className="section">
      <Reveal>
        <h2 className="title">Fields I Explore</h2>
      </Reveal>

      <div className="domains-grid">
        {domains.map((d, i) => (
          <Reveal key={d.title} delay={i * 100}>
            <article className="domain-card">
              <img
                src={d.img}
                alt={d.title}
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="domain-overlay">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Domains;