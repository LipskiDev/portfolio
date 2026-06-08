import { Link } from "react-router-dom";

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300">
      {children}
    </span>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-stone-300">{body}</p>
    </div>
  );
}

function ArchitectureNode({
  eyebrow,
  title,
  subtitle,
  tone = "neutral",
  dashed = false,
  muted = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "neutral" | "blue" | "green" | "orange" | "cyan" | "purple";
  dashed?: boolean;
  muted?: boolean;
}) {
  const tones = {
    neutral:
      "border-white/10 bg-white/[0.03] text-stone-100 shadow-black/20",
    blue:
      "border-blue-500/25 bg-blue-500/5 text-blue-100 shadow-blue-500/10",
    green:
      "border-emerald-500/25 bg-emerald-500/5 text-emerald-100 shadow-emerald-500/10",
    orange:
      "border-orange-500/25 bg-orange-500/5 text-orange-100 shadow-orange-500/10",
    cyan:
      "border-cyan-500/25 bg-cyan-500/5 text-cyan-100 shadow-cyan-500/10",
    purple:
      "border-purple-500/25 bg-purple-500/5 text-purple-100 shadow-purple-500/10",
  };

  const eyebrowTones = {
    neutral: "text-stone-500",
    blue: "text-blue-300",
    green: "text-emerald-300",
    orange: "text-orange-300",
    cyan: "text-cyan-300",
    purple: "text-purple-300",
  };

  return (
    <div
      className={[
        "w-full rounded-2xl border p-6 text-center shadow-lg",
        tones[tone],
        dashed ? "border-dashed" : "",
        muted ? "opacity-60" : "",
      ].join(" ")}
    >
      <p
        className={[
          "text-xs uppercase tracking-[0.24em]",
          eyebrowTones[tone],
        ].join(" ")}
      >
        {eyebrow}
      </p>

      <h3 className="mt-2 text-2xl font-semibold text-stone-100">{title}</h3>

      {subtitle && <p className="mt-3 text-sm text-stone-400">{subtitle}</p>}
    </div>
  );
}

function Arrow({ children }: { children: string }) {
  return <div className="text-3xl text-stone-600">{children}</div>;
}

export default function Velos() {
  const tags = [
    "C++23",
    "Rendering Hardware Interface",
    "Vulkan Backend",
    "SPIR-V Reflection",
    "Engine Architecture",
  ];

  const features = [
    {
      title: "Backend-independent API",
      body: "Rendering code is written against a common interface instead of directly against Vulkan.",
    },
    {
      title: "Pipeline Abstraction",
      body: "Graphics and compute pipelines are created through a unified API independent of backend implementation.",
    },
    {
      title: "Descriptor Management",
      body: "Supports descriptor pools, layouts, descriptor sets, samplers, textures, and buffers.",
    },
    {
      title: "Shader Reflection",
      body: "Automatic SPIR-V reflection is used for descriptor set and pipeline layout generation.",
    },
    {
      title: "Command Lists",
      body: "Explicit command recording, submission, synchronization, resource barriers, and GPU work organization.",
    },
    {
      title: "Future-ready Design",
      body: "The architecture is designed to support additional graphics APIs such as Direct3D 12 and WebGPU.",
    },
  ];

  const futureWork = [
    "Direct3D 12 backend",
    "WebGPU backend",
    "Render graph integration",
    "Improved resource lifetime tracking",
    "Pipeline cache system",
    "Multi-threaded command recording",
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        <Link
          to="/"
          className="text-sm text-stone-400 transition hover:text-white"
        >
          ← Back home
        </Link>

        <section className="mt-16 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
              Rendering Hardware Interface
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              Velos
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
              Velos is my custom Rendering Hardware Interface (RHI). It
              abstracts modern graphics APIs behind a backend-independent
              interface while currently providing a Vulkan implementation. Its
              goal is to separate engine code from API-specific details and
              enable future backends such as Direct3D 12 and WebGPU.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/LipskiDev/velos"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:scale-[1.02] hover:bg-stone-200"
              >
                View on GitHub
              </a>

              <a
                href="#architecture"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                View Architecture
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Core Features
          </h2>

          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                body={feature.body}
              />
            ))}
          </div>
        </section>

        <section id="architecture" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Architecture
          </h2>

          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.015] p-6 md:p-10">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md">
                <ArchitectureNode
                  eyebrow="Application"
                  title="Game / Engine Code"
                />
              </div>

              <div className="my-4">
                <Arrow>↓</Arrow>
              </div>

              <div className="w-full max-w-md">
                <ArchitectureNode
                  eyebrow="Render Engine"
                  title="Rodan"
                  tone="blue"
                />
              </div>

              <div className="my-4">
                <Arrow>↓</Arrow>
              </div>

              <div className="w-full max-w-md">
                <ArchitectureNode
                  eyebrow="Rendering Hardware Interface"
                  title="Velos"
                  tone="green"
                />
              </div>

              <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <Arrow>↙</Arrow>
                  <div className="mt-4 w-full">
                    <ArchitectureNode
                      eyebrow="Current Backend"
                      title="Vulkan"
                      tone="orange"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Arrow>↓</Arrow>
                  <div className="mt-4 w-full">
                    <ArchitectureNode
                      eyebrow="Future Backend"
                      title="Direct3D 12"
                      subtitle="planned"
                      tone="cyan"
                      dashed
                      muted
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Arrow>↘</Arrow>
                  <div className="mt-4 w-full">
                    <ArchitectureNode
                      eyebrow="Future Backend"
                      title="WebGPU"
                      subtitle="planned"
                      tone="purple"
                      dashed
                      muted
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-sm uppercase tracking-[0.24em] text-stone-600">
                Backend abstraction
              </div>

              <div className="my-4 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="mb-4">
                <Arrow>↓</Arrow>
              </div>

              <div className="w-full max-w-md">
                <ArchitectureNode eyebrow="Hardware" title="GPU" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Future Work
          </h2>

          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {futureWork.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-stone-300 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
