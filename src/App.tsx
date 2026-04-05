
export default function App() {
  const featuredProjects = [
    {
      title: "Rodan",
      category: "Render Engine",
      tagline: "A renderer and runtime layer built on top of my Vulkan RHI.",
      description:
        "Rodan is my render engine layer focused on practical real-time rendering, tooling, and runtime architecture. It owns the application lifecycle, input, windowing, camera systems, debug rendering, model loading, and ImGui integration, while Velos handles the lower-level graphics abstraction.",
      info: [
        ["Focus", "Engine architecture, rendering workflow, tooling"],
        ["Stack", "C++23, Vulkan, GLFW, ImGui, Assimp, GLM"],
        ["Highlights", "Model rendering, skybox, debug lines, FPS graph, camera, resizing"],
      ],
      tags: ["C++", "Vulkan", "ImGui", "Rendering Engine"],
    },
    {
      title: "Velos",
      category: "Vulkan RHI",
      tagline: "A modern explicit rendering abstraction with a Vulkan backend.",
      description:
        "Velos is my low-level rendering hardware interface. It is designed around explicit resource management, command recording, dynamic rendering, shader reflection, pipeline creation, descriptors, buffers, and images. The long-term goal is an API-agnostic foundation for engine work and graphics experiments.",
      info: [
        ["Focus", "Low-level graphics abstraction and API design"],
        ["Stack", "C++23, Vulkan, Volk, VMA, shaderc, SPIRV-Reflect"],
        ["Highlights", "Dynamic rendering, descriptors, image uploads, depth, swapchain, handles-based API"],
      ],
      tags: ["C++23", "Vulkan", "Shader Reflection", "RHI"],
    },
    {
      title: "Procedural Shader Framework",
      category: "Unreal Engine",
      tagline: "A framework for procedural, ShaderToy-like workflows in Unreal.",
      description:
        "An Unreal Engine graphics project focused on building reusable procedural shader functionality and authoring workflows. The goal is to create a framework for composing shader-driven visuals in a more modular and experimentation-friendly way.",
      info: [
        ["Focus", "Procedural materials and shader experimentation"],
        ["Stack", "Unreal Engine, HLSL, Material/Shading workflows"],
        ["Highlights", "Reusable shader building blocks, procedural effects, graphics prototyping"],
      ],
      tags: ["Unreal Engine", "Shaders", "Procedural Graphics"],
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
        <header className="mb-20 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
              Maximilian Lipski
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Graphics Programmer
            </h1>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-stone-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#resume" className="transition hover:text-white">Resume</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href="#competencies" className="transition hover:text-white">Competencies</a>
          </nav>
        </header>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-stone-800 via-stone-900 to-black p-6">
              <div className="flex h-full items-end rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-6">
                <p className="max-w-xs text-sm leading-7 text-stone-400">
                  Portrait / render / project visual placeholder.
                  Replace this with a strong photo or a polished engine screenshot.
                </p>
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
                I am a computer science master’s student focused on computer
                graphics, game technology, and rendering systems. I am especially
                interested in low-level graphics programming, engine architecture,
                and real-time rendering.
              </p>
              <p>
                Most of my work is centered around building graphics technology from
                scratch: designing APIs, implementing rendering abstractions,
                integrating tools, and developing practical rendering features that
                improve both understanding and presentation quality.
              </p>
              <p>
                This portfolio showcases the projects I am building to grow as a
                graphics engineer, with a strong focus on Vulkan, engine systems,
                shader workflows, and technical clarity.
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

          <div className="mt-12 space-y-20">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-stone-900 to-black p-4">
                    <div className="flex h-full items-end rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.02] p-5">
                      <p className="text-sm text-stone-500">
                        Add a polished screenshot, short clip, or technical visual here.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-lg text-stone-200">{project.tagline}</p>
                  <p className="mt-6 text-base leading-8 text-stone-300">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {project.info.map(([label, value]) => (
                      <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.02] p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                          {label}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-stone-300">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Resume
            </h2>
            <div className="mt-6 h-px w-full bg-white/10" />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
            <div className="space-y-8 text-stone-300">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
                  Education
                </p>
                <p className="mt-3 text-lg text-white">
                  M.Sc. Computer Science
                </p>
                <p className="mt-2 leading-8">
                  Focus on programming-related topics with strong interest in
                  computer graphics, rendering, and game development.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
                  Interests
                </p>
                <p className="mt-3 leading-8">
                  Rendering engineering, graphics programming, engine systems,
                  shader development, real-time rendering, and technical R&D.
                </p>
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Request full CV
                </a>
              </div>
            </div>
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
      </div>
    </div>
  );
}
