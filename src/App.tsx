import { Link } from "react-router-dom";

import abeautifulgameImage from "./assets/abeautifulgame.png";
import sponzaImage from "./assets/sponza.png";
import iryvenImage from "./assets/iryven.png";
import velosTestsImage from "./assets/velos tests.png";

const projects = [
  { id: "01", title: "Rodan", image: abeautifulgameImage, category: "Render Engine", tagline: "A renderer and runtime layer built on top of my custom RHI.", stack: "C++ · Vulkan · ImGui · Rendering Engine", route: "/projects/rodan" },
  { id: "02", title: "Velos", image: velosTestsImage, category: "Vulkan RHI", tagline: "A modern explicit rendering abstraction with a Vulkan backend.", stack: "C++20 · Vulkan · Shader Reflection · RHI", route: "/projects/velos" },
  { id: "03", title: "Iryven", image: iryvenImage, category: "3D Game Engine", tagline: "A C++ engine combining Vulkan meshlet rendering, scene simulation, and editor tooling.", stack: "C++20 · Vulkan · Mesh Shaders · Engine Development", route: "/projects/iryven" },
];

const competencies = ["C++", "Vulkan", "OpenGL", "GLSL", "Unreal Engine", "Rendering Architecture", "GPU Programming", "Real-Time Rendering", "Debugging & Profiling", "Engine Development"];

export default function App() {
  return (
    <div className="site" id="top">
      <aside className="rail">
        <div>
          <a href="#top" className="rail-name">Maximilian<br />Lipski</a>
          <p>Graphics Programmer</p>
        </div>
        <nav aria-label="Primary navigation">
          <a href="#work"><span>01</span>Projects</a>
          <a href="#about"><span>02</span>About</a>
          <a href="#skills"><span>03</span>Competencies</a>
          <a href="#contact"><span>04</span>Contact</a>
        </nav>
        <div className="rail-links">
          <a href="/CV_Maximilian_Lipski.pdf" target="_blank" rel="noreferrer">CV ↗</a>
          <a href="https://github.com/LipskiDev" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/maximilian-lipski" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </aside>

      <main>
        <header className="mobile-header"><a href="#top">Maximilian Lipski</a><a href="#work">Projects</a></header>

        <section className="hero">
          <p className="label">Portfolio / 2026</p>
          <h1>Graphics<br />Programmer</h1>
          <div className="hero-copy">
            <p>Building rendering technology, graphics APIs, and real-time engine systems.</p>
            <p className="availability">Computer Science master&apos;s student specializing in computer graphics, rendering systems, and game technology.</p>
          </div>
          <figure>
            <img src={sponzaImage} alt="Sponza scene rendered in Rodan" />
            <figcaption><span>Rodan renderer / Sponza</span><span>Vulkan · PBR · IBL</span></figcaption>
          </figure>
        </section>

        <section className="thesis-note">
          <p className="label">Currently working on</p>
          <h2>Rendering of transparent lines using hardware-accelerated linear swept sphere primitives</h2>
          <Link to="/projects/master-thesis">Master&apos;s thesis <span>→</span></Link>
        </section>

        <section id="work" className="page-section work">
          <header className="section-header"><p className="label">01 / Selected projects</p><p>Rendering systems, engine architecture, and GPU programming.</p></header>
          <div className="project-list">
            {projects.map((project) => (
              <Link to={project.route} className="project" key={project.title}>
                <div className="project-media"><img src={project.image} alt={`${project.title} project`} /></div>
                <div className="project-info">
                  <div className="project-title"><span>{project.id}</span><h2>{project.title}</h2><span className="arrow">↗</span></div>
                  <p className="category">{project.category}</p>
                  <p className="description">{project.tagline}</p>
                  <p className="stack">{project.stack}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="page-section about">
          <header className="section-header"><p className="label">02 / About</p></header>
          <div className="about-grid">
            <h2>Computer Science master&apos;s student specializing in computer graphics, rendering systems, and game technology.</h2>
            <div>
              <p>Building graphics technology from scratch, focusing on Vulkan, rendering architecture, shader workflows, debugging, profiling, and engine development.</p>
              <p>Particularly interested in rendering systems and shader techniques that enable a game&apos;s intended visual style, whether physically based or stylized.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="page-section skills">
          <header className="section-header"><p className="label">03 / Competencies</p></header>
          <div className="skill-grid">{competencies.map((skill, index) => <div key={skill}><span>{String(index + 1).padStart(2, "0")}</span><p>{skill}</p></div>)}</div>
        </section>

        <section className="page-section cv">
          <header className="section-header"><p className="label">CV / Education</p></header>
          <div className="cv-row"><div><h2>M.Sc. Computer Science</h2><p>Focused on computer graphics, rendering, engine systems, and GPU programming.</p></div><div><a href="/CV_Maximilian_Lipski.pdf" target="_blank" rel="noreferrer">View CV ↗</a><a href="/CV_Maximilian_Lipski.pdf" download="CV_Maximilian_Lipski.pdf">Download ↓</a></div></div>
        </section>

        <section id="contact" className="contact">
          <p className="label">04 / Contact</p>
          <h2>Let&apos;s talk about<br />graphics programming.</h2>
          <p>I am interested in graphics programming, rendering engineering, and engine development opportunities.</p>
          <div><a href="mailto:lipskidev@outlook.com">lipskidev@outlook.com ↗</a></div>
        </section>

        <footer><span>© {new Date().getFullYear()} Maximilian Lipski</span><a href="#top">Top ↑</a></footer>
      </main>
    </div>
  );
}
