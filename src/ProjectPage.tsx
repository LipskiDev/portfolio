import { Link, useParams } from "react-router-dom";
import { projects } from "./projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? projects[slug as keyof typeof projects] : undefined;

  if (!project) {
    return (
      <main className="min-h-screen bg-stone-950 text-stone-100">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Link to="/" className="text-stone-400 hover:text-white">
            ← Back home
          </Link>
          <h1 className="mt-16 text-4xl font-semibold">Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link to="/" className="text-sm text-stone-400 hover:text-white">
          ← Back home
        </Link>

        <p className="mt-16 text-sm uppercase tracking-[0.24em] text-stone-500">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
          {project.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 space-y-12">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 leading-8 text-stone-300">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}