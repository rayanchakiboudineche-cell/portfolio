import { useState } from "react";
import Reveal from "./reveal";

const PHONE = "054184606";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="title">Contact</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="card contact-card">
          <p>Want to work together or just say hi? Call me!</p>
          <div className="phone">{PHONE}</div>
          <div className="actions">
            <a href={`tel:${PHONE}`} className="btn">Call now</a>
            <button className="btn btn-outline" onClick={copy}>
              {copied ? "Copied ✓" : "Copy number"}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;