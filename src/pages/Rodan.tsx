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

function EngineeringDecision({
  title,
  problem,
  decision,
  result,
  href,
  linkLabel,
}: {
  title: string;
  problem: string;
  decision: string;
  result: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <dl className="mt-6 space-y-5 text-sm leading-7 md:text-base">
        <div>
          <dt className="font-medium text-stone-100">Problem</dt>
          <dd className="text-stone-400">{problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-100">Design decision</dt>
          <dd className="text-stone-400">{decision}</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-100">Trade-off / result</dt>
          <dd className="text-stone-400">{result}</dd>
        </div>
      </dl>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
      >
        {linkLabel} →
      </a>
    </article>
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
                controls
                aria-label="Rodan renderer demonstration"
              >
                <source src={renderVideo} type="video/mp4" />
              </video>
            </div>
            <p className="px-2 pb-1 pt-4 text-sm leading-6 text-stone-400">
              Real-time capture from Rodan showing scene navigation, PBR materials,
              transmission, and in-engine debug controls.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
            Performance
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Sponza benchmark
          </h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] md:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
              <p className="text-5xl font-semibold tracking-tight text-white">≈2.5 ms</p>
              <p className="mt-2 text-stone-400">≈400 FPS average</p>
            </div>
            <div className="p-8 text-sm leading-7 text-stone-300">
              <p>2560 × 1600 · RTX 5070 · release build · VSync disabled</p>
              <p className="mt-2">
                One directional light with shadow mapping, PBR, image-based
                lighting, and tonemapping.
              </p>
              <p className="mt-4 text-stone-500">
                Measured from the engine&apos;s end-to-end frame delta. This includes
                CPU and presentation time and is not an isolated GPU timestamp.
              </p>
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
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Engineering decisions
          </h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <EngineeringDecision
              title="Shader reflection"
              problem="Keeping shader resource declarations and Vulkan layouts in sync by hand is repetitive and easy to break as shaders evolve."
              decision="Velos reflects compiled SPIR-V, merges resources across shader stages, and builds descriptor-set and pipeline layouts from that interface. Explicit overrides support shared or runtime-sized layouts."
              result="Shader interfaces become the source of truth. The added validation and reflection work reduces duplicated binding metadata and catches incompatible layouts early."
              href="https://github.com/LipskiDev/velos/blob/main/velos/shader/shader_compiler.cpp"
              linkLabel="View shader reflection"
            />
            <EngineeringDecision
              title="Transfer-queue uploads"
              problem="Texture and mesh uploads should not force all copy work through the graphics queue or expose resources before ownership and layout transitions are complete."
              decision="Velos uses an upload context with staging buffers, prefers a dedicated transfer queue, and records pending image acquires for the graphics queue."
              result="Uploads stay behind an RHI-level contract and can use dedicated hardware when available; explicit queue-family ownership makes the synchronization cost visible."
              href="https://github.com/LipskiDev/velos/blob/main/velos/rhi/vulkan/upload_context.cpp"
              linkLabel="View upload implementation"
            />
            <EngineeringDecision
              title="glTF material loading"
              problem="Real assets combine geometry, texture transforms, fallback values, and extensions such as transmission and volume."
              decision="Rodan separates CPU-side glTF parsing from GPU resource construction, then uploads combined mesh buffers and builds per-material bindings with fallback textures."
              result="The importer remains understandable and supports richer PBR assets, while the explicit material bindings currently cost more descriptors than a fully bindless path."
              href="https://github.com/LipskiDev/Rodan/blob/main/engine/assets/gltf_asset_loader.cpp"
              linkLabel="View glTF asset loading"
            />
            <EngineeringDecision
              title="Renderer / RHI separation"
              problem="Scene, material, and render-pass code should not depend directly on Vulkan objects, but the abstraction must preserve explicit GPU control."
              decision="Rodan owns high-level rendering and scene systems; Velos owns buffers, images, pipelines, descriptors, command submission, and synchronization behind backend-independent interfaces."
              result="The Vulkan backend can evolve independently and Rodan stays focused on rendering features. The boundary adds API design work but prevents backend details from spreading through the engine."
              href="https://github.com/LipskiDev/velos/blob/main/velos/rhi/device.h"
              linkLabel="View the RHI interface"
            />
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
            Next steps
          </h2>

<div className="mt-10 grid gap-4 md:grid-cols-2">
  {[
    "Complete render-graph integration",
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
