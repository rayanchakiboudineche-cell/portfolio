import "./App.css";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Me from "./components/me";
import Skil from "./components/skil";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Domains from "./components/domains";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Me />
        <Skil />
        <Domains />
        <div className="duo">
        <Projects />
        <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;