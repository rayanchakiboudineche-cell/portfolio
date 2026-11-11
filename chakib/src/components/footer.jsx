function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>Chakib Oudineche</h3>
          <p>Computer Science Student • Saad Dahlab University</p>
        </div>

        <div className="footer-links">
          <a href="#about">about-me</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>

        <div>
          <p>📞 <a href="tel:054184606">054184606</a></p>
        </div>
      </div>
      <small>© {new Date().getFullYear()} Chakib Oudineche. All rights reserved.</small>
    </footer>
  );
}

export default Footer;