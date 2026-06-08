import { Link } from "react-router-dom";

import psfImage from "../assets/psf.png";
import christmasTreeImage from "../assets/christmastree.png";
import blinnPhongImage from "../assets/BlinnPhongLighting.png";
import phongImage from "../assets/phongLighting.png";
import pbrImage from "../assets/PBRLighting.png";
import lambertImage from "../assets/lamberdiffusion.png";
import rimImage from "../assets/rimLighting.png";
import fakeSpecularImage from "../assets/fakeSpecular.png";
import sunlightImage from "../assets/sunlightExample.png";
import toonImage from "../assets/toonLighting.png";
import subsurfaceImage from "../assets/softSubsurfaceScattering.png";
import uvaImage from "../assets/uva.png";
import safetybuoy from "../assets/safetybuoy.png"
import car from "../assets/car.png"

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

function ShowcaseImage({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]">
      <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-stone-500">
        {title}
      </p>
    </div>
  );
}

function StructureNode({
  eyebrow,
  title,
  body,
  tone,
}: {
  eyebrow: string;
  title: string;
  body: string;
  tone: "purple" | "blue" | "emerald" | "orange";
}) {
  const tones = {
    purple: "border-purple-500/25 bg-purple-500/5 shadow-purple-500/10",
    blue: "border-blue-500/25 bg-blue-500/5 shadow-blue-500/10",
    emerald: "border-emerald-500/25 bg-emerald-500/5 shadow-emerald-500/10",
    orange: "border-orange-500/25 bg-orange-500/5 shadow-orange-500/10",
  };

  const text = {
    purple: "text-purple-300",
    blue: "text-blue-300",
    emerald: "text-emerald-300",
    orange: "text-orange-300",
  };

  return (
    <div
      className={[
        "rounded-2xl border p-6 text-center shadow-lg",
        tones[tone],
      ].join(" ")}
    >
      <p className={["text-xs uppercase tracking-[0.24em]", text[tone]].join(" ")}>
        {eyebrow}
      </p>
      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-400">{body}</p>
    </div>
  );
}

export default function ProceduralShaderFramework() {
  const tags = [
    "Unreal Engine",
    "HLSL",
    "Raymarching",
    "SDFs",
    "Procedural Shading",
    "ShaderToy",
  ];

  const features = [
    {
      title: "Shader Playground",
      body: "Post-process based shader playground for experimenting with procedural scenes directly inside Unreal Engine.",
    },
    {
      title: "Signed Distance Fields",
      body: "Reusable SDF primitives and raymarching utilities for building procedural scenes and objects.",
    },
    {
      title: "Lighting Models",
      body: "Phong, Blinn-Phong, Lambert, toon, rim, fake specular, soft subsurface, and PBR-style lighting experiments.",
    },
    {
      title: "Material Helpers",
      body: "Procedural material helpers for assigning color and shading properties to generated SDF objects.",
    },
    {
      title: "Camera Utilities",
      body: "Helper functions for camera setup, orbit movement, mouse-based movement, and animated camera behavior.",
    },
    {
      title: "Animation Helpers",
      body: "Reusable time-based animation utilities for procedural shader scenes and effects.",
    },
  ];

  const showcase = [
    {
      src: car,
      title: "car",
      alt: "Procedural car shader render",
    },
    {
      src: christmasTreeImage,
      title: "Procedural Christmas tree",
      alt: "Procedural Christmas tree shader render",
    },
    {
      src: safetybuoy,
      title: "Safety Buoy",
      alt: "Safety Buoy",
    },
    {
      src: uvaImage,
      title: "Procedural UVA scene",
      alt: "Procedural shader scene",
    },
  ];

  const lightingExamples = [
    {
      src: blinnPhongImage,
      title: "Blinn-Phong",
      alt: "Blinn-Phong lighting example",
    },
    {
      src: phongImage,
      title: "Phong",
      alt: "Phong lighting example",
    },
    {
      src: pbrImage,
      title: "PBR lighting",
      alt: "PBR lighting example",
    },
    {
      src: lambertImage,
      title: "Lambert diffusion",
      alt: "Lambert diffuse lighting example",
    },
    {
      src: rimImage,
      title: "Rim lighting",
      alt: "Rim lighting example",
    },
    {
      src: toonImage,
      title: "Toon lighting",
      alt: "Toon lighting example",
    },
    {
      src: fakeSpecularImage,
      title: "Fake specular",
      alt: "Fake specular lighting example",
    },
    {
      src: subsurfaceImage,
      title: "Soft subsurface",
      alt: "Soft subsurface lighting example",
    },
    {
      src: sunlightImage,
      title: "Sunlight example",
      alt: "Sunlight shader example",
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

        <section className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
              Unreal Engine Shader Framework
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              Procedural Shader Framework
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
              A ShaderToy-inspired procedural shader framework implemented in
              Unreal Engine as part of a university software engineering
              project. My work focused on the Unreal Engine integration,
              raymarching pipeline, SDF utilities, lighting models, and reusable
              shader building blocks.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/LipskiDev/procedural_shader_framework"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:scale-[1.03] hover:bg-stone-200"
              >
                View on GitHub
              </a>

              <a
                href="#showcase"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                View Showcase
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <img
                src={car}
                alt="Procedural shader car"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="showcase" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Showcase
          </h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {showcase.map((image) => (
              <ShowcaseImage
                key={image.title}
                src={image.src}
                alt={image.alt}
                title={image.title}
              />
            ))}
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
            Lighting Experiments
          </h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lightingExamples.map((image) => (
              <ShowcaseImage
                key={image.title}
                src={image.src}
                alt={image.alt}
                title={image.title}
              />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Framework Structure
          </h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.015] p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-4">
              <StructureNode
                eyebrow="Scene"
                title="SDFs"
                body="Procedural primitives and distance functions."
                tone="purple"
              />

              <StructureNode
                eyebrow="Tracing"
                title="Raymarching"
                body="March rays through procedural distance fields."
                tone="blue"
              />

              <StructureNode
                eyebrow="Surface"
                title="Normals"
                body="Estimate normals from the signed distance field."
                tone="emerald"
              />

              <StructureNode
                eyebrow="Shading"
                title="Lighting"
                body="Apply procedural materials and lighting models."
                tone="orange"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-stone-500">
              <span>SDF primitives</span>
              <span>→</span>
              <span>Raymarching</span>
              <span>→</span>
              <span>Normal estimation</span>
              <span>→</span>
              <span>Lighting</span>
              <span>→</span>
              <span>Unreal post-process output</span>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Project Background
          </h2>

          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <p className="max-w-4xl text-lg leading-8 text-stone-300">
              This framework was developed as part of a university software
              engineering project. The goal was to create a procedural shader
              framework inspired by ShaderToy that could be integrated into
              multiple game engines.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
              I was responsible for the{" "}
              <span className="font-semibold text-white">
                Unreal Engine implementation
              </span>
              , designing and implementing the framework architecture, shader
              utilities, raymarching workflow, lighting functions, and rendering
              pipeline inside Unreal Engine.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
              Other teams worked on implementations for{" "}
              <span className="font-semibold text-white">Unity</span> and{" "}
              <span className="font-semibold text-white">Godot</span>, while
              another team developed tooling to automatically extract and adapt
              code snippets from{" "}
              <span className="font-semibold text-white">ShaderToy</span> for
              use within the framework.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">Future Work</h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "More SDF primitives",
              "Additional procedural scenes",
              "Improved material authoring",
              "Better documentation examples",
              "Unreal editor tooling",
              "More stylized shader effects",
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
