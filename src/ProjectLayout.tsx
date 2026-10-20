import { Link, Outlet, useLocation } from "react-router-dom";

const projectLinks = [
  { path: "/projects/iryven", title: "Iryven" },
  { path: "/projects/rodan", title: "Rodan" },
  { path: "/projects/velos", title: "Velos" },
  { path: "/projects/nvrhi-pt", title: "NVRHI Path Tracer" },
  { path: "/projects/master-thesis", title: "Master’s thesis" },
];

export default function ProjectLayout() {
  const { pathname } = useLocation();

  return (
    <div className="site project-site" id="top">
      <aside className="rail">
        <div>
          <Link to="/" className="rail-name">Maximilian<br />Lipski</Link>
          <p>Graphics Programmer</p>
        </div>
        <nav aria-label="Project navigation">
          <Link to="/"><span>←</span>All projects</Link>
          {projectLinks.map((project, index) => (
            <Link key={project.path} to={project.path} aria-current={pathname === project.path ? "page" : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span>{project.title}
            </Link>
          ))}
        </nav>
        <div className="rail-links">
          <a href="/CV_Maximilian_Lipski.pdf" target="_blank" rel="noreferrer">CV ↗</a>
          <a href="https://github.com/LipskiDev" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/maximilian-lipski" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </aside>
      <div className="project-shell">
        <header className="mobile-header"><Link to="/">Maximilian Lipski</Link><Link to="/">All projects ←</Link></header>
        <Outlet />
        <footer><span>© {new Date().getFullYear()} Maximilian Lipski</span><a href="#top">Top ↑</a></footer>
      </div>
    </div>
  );
}
