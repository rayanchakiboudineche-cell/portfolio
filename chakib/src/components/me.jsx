import { useEffect, useState } from "react";
import Reveal from "./reveal";
import useInView from "../hooks/useInView";

const stats = [
  { value: 5, label: "Skills" },
  { value: 1, label: "Year Goal: Full-Stack" },
  { value: 100, suffix: "%", label: "Passion" },
];

const timeline = [
  { icon: "🎓", title: "L1 Computer Science", text: "Saad Dahlab University" },
  { icon: "🎮", title: "Game Development", text: "My biggest passion" },
  { icon: "🚀", title: "Goal 2026", text: "Front-end, back-end, DevOps & deployment" },
];

function Counter({ to, suffix = "" }) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to)); // ease-out
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

function Me() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="title">About Me</h2>
      </Reveal>

      <div className="about-grid">
        {/* ---------- PHOTO ---------- */}
        <Reveal className="about-photo-wrap">
          <div className="photo-frame">
            <span className="photo-ring" />
            <div className="photo-inner">
              {photoOk ? (
                <img
                  src="/img/me.jpg"
                  alt="Chakib Oudineche"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <div className="photo-placeholder">CO</div>
              )}
            </div>

            <span className="badge b1">🎮 Gamer</span>
            <span className="badge b2">💻 Developer</span>
            <span className="badge b3">🎓 Student</span>
          </div>
        </Reveal>

        {/* ---------- TEXT ---------- */}
        <Reveal delay={150}>
          <div className="card about-card">
            <p className="about-hello">Hello, I'm</p>
            <h3>Chakib Oudineche</h3>
            <p>
              I'm a first-year Computer Science student at Saad Dahlab
              University. I love game development and building things that
              people can play and enjoy.
            </p>
            <p>
              <strong>My goal this year:</strong> build a complete website
              — front end, back end, DevOps and deployment.
            </p>

            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b><Counter to={s.value} suffix={s.suffix} /></b>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>

            <ul className="timeline">
              {timeline.map((t) => (
                <li key={t.title}>
                  <span className="tl-icon">{t.icon}</span>
                  <div>
                    <strong>{t.title}</strong>
                    <small>{t.text}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Me;