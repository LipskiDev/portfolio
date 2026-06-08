import { Link } from "react-router-dom";

import abeautifulgameImage from "./assets/abeautifulgame.png";
import dragonImage from "./assets/dragon_attenuation.png";
import sponzaImage from "./assets/sponza.png";
import fsImage from "./assets/fs.png";
import psfImage from "./assets/psf.png"

export default function App() {
  const featuredProjects = [
    {
      title: "Rodan",
      image: abeautifulgameImage,
      category: "Render Engine",
      tagline: "A renderer and runtime layer built on top of my Vulkan RHI.",
      tags: ["C++", "Vulkan", "ImGui", "Rendering Engine"],
      route: "/projects/rodan",
    },
    {
      title: "Velos",
      image: fsImage,
      category: "Vulkan RHI",
      tagline: "A modern explicit rendering abstraction with a Vulkan backend.",
      tags: ["C++23", "Vulkan", "Shader Reflection", "RHI"],
      route: "/projects/velos",
    },
    {
      title: "Procedural Shader Framework",
      image: psfImage,
      category: "Unreal Engine",
      tagline: "A framework for procedural, ShaderToy-like workflows in Unreal.",
      tags: ["Unreal Engine", "Shaders", "Procedural Graphics"],
      route: "/projects/procedural-shader-framework",
    },
  ];

  const competencies = [
    "C++",
    "Vulkan",
    "OpenGL",
    "GLSL",
    "Unreal Engine",
    "Rendering Architecture",
    "GPU Programming",
    "Real-Time Rendering",
    "Debugging & Profiling",
    "Engine Development",
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <header className="mb-20 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
                Maximilian Lipski
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
                Graphics Programmer
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                Building rendering technology, graphics APIs, and real-time engine systems.
              </p>
            </div>

            <nav className="flex flex-wrap gap-5 pt-1 text-sm text-stone-300 md:pt-2">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#resume" className="transition hover:text-white">CV</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
              <a href="#competencies" className="transition hover:text-white">Competencies</a>
            </nav>
          </div>
        </header>

        <section id="about" className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src={sponzaImage}
                alt="Sponza render"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-stone-500">Focus</p>
                <p className="mt-2 text-white">Real-time Rendering</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-stone-500">API</p>
                <p className="mt-2 text-white">Vulkan</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-stone-500">Language</p>
                <p className="mt-2 text-white">C++23</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-stone-500">Tools</p>
                <p className="mt-2 text-white">Nsight / RenderDoc</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              About me
            </h2>
            <div className="mt-6 h-px w-full bg-white/10" />

            <div className="mt-8 space-y-6 text-base leading-8 text-stone-300 md:text-lg">
              <p>
                I am a computer science master’s student specializing in computer
                graphics, rendering systems, and game technology.
              </p>
              <p>
                I build graphics technology from scratch, focusing on Vulkan,
                rendering architecture, shader workflows, debugging, profiling,
                and engine development.
              </p>
              <p>
                I am especially interested in rendering systems and shader techniques
                that enable a game’s intended visual style, whether physically based
                or stylized.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projects
            </h2>
            <div className="mt-6 h-px w-full bg-white/10" />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                to={project.route}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.05]"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-stone-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-stone-300">
                    {project.tagline}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-stone-500 transition group-hover:text-white">
                    View project →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="resume" className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              CV
            </h2>
            <div className="mt-6 h-px w-full bg-white/10" />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
              Education
            </p>
            <p className="mt-3 text-lg text-white">
              M.Sc. Computer Science
            </p>
            <p className="mt-2 leading-8 text-stone-300">
              Focused on computer graphics, rendering, engine systems, and GPU programming.
            </p>

            <a
              href="/cv.pdf"
              className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Download CV
            </a>
          </div>
        </section>

        <section id="competencies" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Competencies
          </h2>
          <div className="mt-6 h-px w-full bg-white/10" />
          <div className="mt-10 flex flex-wrap gap-3">
            {competencies.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
            Contact me
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Let’s talk about graphics programming.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
            I am interested in graphics programming, rendering engineering, and
            engine development opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-base text-stone-200">
            <a href="mailto:max.lipski@hotmail.com" className="transition hover:text-white">
              Email
            </a>
            <a href="https://github.com/LipskiDev" className="transition hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/maximilian-lipski" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 py-8 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Maximilian Lipski</p>
        </footer>
      </div>
    </div>
  );
}