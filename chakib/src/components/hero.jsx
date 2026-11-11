import { useEffect, useState } from "react";

const roles = ["Game Developer", "Front-End Builder", "Future Full-Stack Dev"];

function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setTimeout(() => setDeleting(true), 1200);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setI((i + 1) % roles.length);
        return;
      }
      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <section id="home" className="hero">
     

      <p className="hero-hello">Hi, I'm Chakib</p>
      <h1>PORTFOLIO</h1>
      <p className="typing">
        {text}
        <span className="cursor">|</span>
      </p>
      <a href="#projects" className="hero-link">my_projects</a>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}

export default Hero;