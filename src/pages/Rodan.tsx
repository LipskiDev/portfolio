import { Link } from "react-router-dom";

import sponzaImage from "../assets/sponza.png";
import chessImage from "../assets/abeautifulgame.png";
import renderVideo from "../assets/render-web.mp4";

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

function RenderPassNode({
  title,
  body,
  tone = "neutral",
}: {
  title: string;
  body: string;
  tone?: "neutral" | "blue" | "green" | "orange" | "purple" | "cyan";
}) {
  const tones = {
    neutral: "border-white/10 bg-white/[0.03]",
    blue: "border-blue-500/25 bg-blue-500/5 shadow-blue-500/10",
    green: "border-emerald-500/25 bg-emerald-500/5 shadow-emerald-500/10",
    orange: "border-orange-500/25 bg-orange-500/5 shadow-orange-500/10",
    purple: "border-purple-500/25 bg-purple-500/5 shadow-purple-500/10",
    cyan: "border-cyan-500/25 bg-cyan-500/5 shadow-cyan-500/10",
  };

  return (
    <div
      className={[
        "rounded-2xl border p-5 shadow-lg transition hover:scale-[1.02]",
        tones[tone],
      ].join(" ")}
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-400">{body}</p>
    </div>
  );
}


export default function Rodan() {
  const tags = [
    "C++23",
    "Velos RHI",
    "GLSL",
    "PBR",
    "IBL",
    "glTF 2.0",
    "Engine Architecture",
  ];

  const features = [
    {
      title: "Physically Based Rendering",
      body: "Cook-Torrance PBR material model with metallic/roughness workflow.",
    },
    {
      title: "Image-Based Lighting",
      body: "Irradiance maps, prefiltered environment maps, and BRDF LUT generation.",
    },
    {
      title: "glTF 2.0 Loading",
      body: "Asset loading with support for KHR_materials_transmission and KHR_materials_volume.",
    },
    {
      title: "HDR Tonemapping",
      body: "Dedicated tonemapping pass for converting HDR scene color to display output.",
    },
    {
      title: "Shadow Mapping",
      body: "Directional light shadow mapping integrated into the main rendering pipeline.",
    },
    {
      title: "Debug Tooling",
      body: "Dear ImGui integration, debug visualization, RenderDoc and Nsight Graphics workflows.",
    },
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

        <section className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
              Render Engine
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              Rodan
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
              Rodan is my real-time rendering engine built on top of Velos, my
              custom Rendering Hardware Interface (RHI). It focuses on modern
              rendering features, engine architecture, debugging workflows, and
              practical graphics programming.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/LipskiDev/Rodan"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:scale-[1.03] hover:bg-stone-200"
              >
                View on GitHub
              </a>

              <a
                href="#features"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={renderVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Showcase
          </h2>
          <div className="mt-6 h-px bg-white/10" />

<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20">
  <img
    src={sponzaImage}
    alt="Sponza scene rendered in Rodan"
    className="aspect-[16/9] w-full rounded-[1.5rem] object-cover transition duration-300 hover:scale-[1.02]"
  />
</div>

<div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20">
  <img
    src={chessImage}
    alt="Chess scene rendered in Rodan"
    className="aspect-[16/9] w-full rounded-[1.5rem] object-cover transition duration-300 hover:scale-[1.02]"
  />
</div>
          </div>
        </section>

        <section id="features" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">Features</h2>
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

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Render Passes
          </h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.015] p-6 md:p-10">
<div className="grid gap-6 lg:grid-cols-5">
  <RenderPassNode
    title="Shadow Pass"
    body="Render directional light depth into the shadow map."
    tone="purple"
  />

  <RenderPassNode
    title="Skybox Pass"
    body="Render the environment cubemap and establish the scene background."
    tone="cyan"
  />

  <RenderPassNode
    title="Opaque Pass"
    body="Render opaque geometry into the HDR scene color target."
    tone="blue"
  />

  <RenderPassNode
    title="Transmission Pass"
    body="Render transmission and volume materials using the opaque scene."
    tone="green"
  />

  <RenderPassNode
    title="Tonemapping Pass"
    body="Convert the HDR scene into the final display image."
    tone="orange"
  />
</div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-stone-500">
              <span>Shadow Map</span>
              <span>→</span>
              <span>Skybox</span>
              <span>→</span>
              <span>Opaque Scene</span>
              <span>→</span>
              <span>Transmission</span>
              <span>→</span>
              <span>Tonemapped Backbuffer</span>
            </div>
          </div>
        </section>



        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Future Work
          </h2>

<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {[
    "Point & spot lights",
    "Cascaded shadow maps",
    "Screen Space Ambient Occlusion",
    "Bloom",
    "Frame graph",
    "GPU-driven rendering",
  ].map((item) => (
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
