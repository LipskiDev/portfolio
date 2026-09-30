import { Link } from "react-router-dom";
import iryvenImage from "../assets/iryven.png";
import { projects } from "../projects";

const architecture = [
  { title: "Application", body: "Sandbox and Editor define scene content and behavior through engine layers." },
  { title: "World", body: "Entities, components, and systems hold and update simulation state." },
  { title: "Render scene", body: "The world extracts cameras, lights, and objects into a per-frame scene description." },
  { title: "Renderer", body: "The frame graph schedules GPU work through Velos and Vulkan." },
];

export default function Iryven() {
  const project = projects.iryven;
  return (
    <main className="min-h-screen bg-[#04120d] text-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        <Link to="/" className="text-sm text-stone-400 transition hover:text-white">
          ← Back home
        </Link>

        <section className="mt-16">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
            {project.category}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Iryven
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            {project.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300">
                {tag}
              </span>
            ))}
          </div>
          <figure className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 md:p-4">
            <img
              src={iryvenImage}
              alt="Iryven meshlet visualization showing an arched interior with each meshlet rendered in a different color"
              className="h-auto w-full rounded-[1.5rem]"
            />
            <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-400">
              Meshlet visualization — each color identifies a small group of triangles processed by the mesh shader.
            </figcaption>
          </figure>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Engine features</h2>
          <div className="mt-6 h-px bg-white/10" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {project.sections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="mt-3 leading-7 text-stone-300">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">From world to frame</h2>
          <div className="mt-6 h-px bg-white/10" />
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            The engine separates simulation state from GPU state. The world hands a scene description to the renderer each frame, allowing game and editor code to work without managing the Vulkan device.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {architecture.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6">
                <p className="text-sm text-emerald-300">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{step.body}</p>
              </li>
            ))}
          </ol>
          <Link to="/projects/velos" className="mt-8 inline-flex text-sm font-medium text-emerald-300 transition hover:text-emerald-200">
            Explore the Velos rendering hardware interface →
          </Link>
        </section>

        <section className="mb-10 mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-stone-500">In development</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Building the engine and its tools</h2>
          <p className="mt-6 max-w-3xl leading-8 text-stone-300">
            Iryven is an evolving engine project with a working sandbox and an early scene editor. The editor currently supports inspecting and saving scenes; undo, transform gizmos, and asset importing through the editor are still to come.
          </p>
        </section>
      </div>
    </main>
  );
}
