import LoopingVideo from "../LoopingVideo";
import { Link } from "react-router-dom";
import iryvenImage from "../assets/optimized/meshlets.webp";
const box3dVideo = "/media/box3d.mp4";
import { projects } from "../projects";

import streetImage from "../assets/optimized/base color.webp";
import sponzaLightingImage from "../assets/optimized/clustered lighting.webp";
import courtyardImage from "../assets/optimized/san miguel.webp";
import courtyardDetailImage from "../assets/optimized/san miguel 2.webp";
import edgePreviewImage from "../assets/optimized/vrs classification.webp";
import materialDebugImage from "../assets/optimized/metallic.webp";
import normalsImage from "../assets/optimized/normals.webp";
import lightingDebugImage from "../assets/optimized/emissive.webp";

const screenshots = [
  { src: streetImage, title: "Debug / Base color", alt: "Street scene base-color view showing material colors without lighting" },
  { src: courtyardDetailImage, title: "Courtyard / Scene detail", alt: "Courtyard tables and wrought-iron chairs rendered in Iryven" },
  { src: sponzaLightingImage, title: "Sponza / Clustered lighting", alt: "Sponza interior with colored lights across the floor and arches" },
  { src: iryvenImage, title: "Geometry / Meshlet visualization", alt: "Street scene with buildings, scooter, and foliage divided into colored meshlets" },
  { src: normalsImage, title: "Debug / Surface normals", alt: "Street scene with surface normal directions visualized as RGB colors" },
  { src: materialDebugImage, title: "Debug / Metallic", alt: "Street scene metallic material channel, with metallic surfaces shown in white" },
  { src: lightingDebugImage, title: "Debug / Emissive", alt: "Street scene emissive material channel showing colored emissive surfaces" },
  { src: edgePreviewImage, title: "Debug / VRS edge classification", alt: "Sponza with red edge outlines and VRS classification controls" },
];

export default function Iryven() {
  const project = projects.iryven;
  return (
    <main className="min-h-screen bg-[#0d1015] text-stone-100">
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
              src={courtyardImage}
              alt="Lit courtyard rendered in Iryven, with patterned tableware, stone columns, foliage, and cast shadows"
              width={1600}
              height={878}
              decoding="async"
              className="h-auto w-full rounded-[1.5rem]"
            />
            <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-400">
              Iryven / Courtyard — materials, lighting, and cast shadows.
            </figcaption>
          </figure>
        </section>

        <section className="mt-24" aria-labelledby="iryven-showcase">
          <p className="label">Rendering / Showcase</p>
          <h2 id="iryven-showcase" className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Scenes, physics, and renderer inspection</h2>
          <p className="mt-6 max-w-3xl leading-8 text-stone-300">
            The Box3D and cloth simulation clips and rendered scenes sit alongside diagnostic views used to inspect geometry, surface normals, lighting, and edge classification.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
          
            {screenshots.map((screenshot) => (
              <figure key={screenshot.title} className="overflow-hidden border border-white/10 bg-white/[0.02]">
                <a href={screenshot.src} target="_blank" rel="noreferrer" className="block" aria-label={"Open full-size image: " + screenshot.title}>
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" decoding="async" width={1600} height={878} className="aspect-[1600/878] w-full object-contain" />
                </a>
                <figcaption className="border-t border-white/10 px-4 py-3">{screenshot.title}</figcaption>
              </figure>
            ))}
            <figure className="overflow-hidden border border-white/10 bg-white/[0.02]">
            <LoopingVideo src={box3dVideo} label="Iryven Box3D physics integration demonstration" />
            <figcaption className="border-t border-white/10 px-4 py-3">Iryven / Box3D physics integration (CPU, 1 Thread)</figcaption>
          </figure>
            <figure className="overflow-hidden border border-white/10 bg-white/[0.02]">
              <LoopingVideo src="/media/cloth.mp4" label="Iryven cloth simulation demonstration" />
              <figcaption className="border-t border-white/10 px-4 py-3">Iryven / Cloth simulation (GPU-Driven)</figcaption>
            </figure>
          </div>
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

        <section className="mb-10 mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-stone-500">In development</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Building the engine and its tools</h2>
          <p className="mt-6 max-w-3xl leading-8 text-stone-300">
            Iryven is in active development, with a textured-model sandbox and an ImGui scene editor running on Vulkan and Direct3D 12. The editor supports model importing, asset assignment, scene editing and saving, and play mode. Undo and transform gizmos are still to come.
          </p>
        </section>
      </div>
    </main>
  );
}






