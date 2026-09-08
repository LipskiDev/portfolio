import { useState } from "react";
import { Link } from "react-router-dom";

import thesisFilteredImage from "../assets/thesis-lss.png";
import thesisOverlappingCapsImage from "../assets/thesis-spheres.png";

function HitFilteringComparison() {
  const [position, setPosition] = useState(50);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111827] select-none">
        <img
          src={thesisOverlappingCapsImage}
          alt="Transparent LSS rendering with overlapping caps producing visible sphere artifacts"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <img
          src={thesisFilteredImage}
          alt="Transparent LSS rendering with overlapping cap hits discarded in the any-hit shader"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          IgnoreHit filtering
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          Overlapping caps
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_18px_rgba(0,0,0,0.8)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/65 text-lg text-white shadow-xl backdrop-blur-sm">
            ↔
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onInput={(event) => setPosition(Number(event.currentTarget.value))}
          aria-label="Compare filtered LSS rendering with overlapping LSS caps"
          aria-valuetext={`${position}% filtered rendering visible`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex flex-col gap-1 text-sm leading-6 text-stone-400 sm:flex-row sm:items-center sm:justify-between">
      </figcaption>
    </figure>
  );
}

export default function MasterThesis() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        <Link to="/" className="text-sm text-stone-400 transition hover:text-white">
          ← Back home
        </Link>

        <section className="mt-16 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
            Master&apos;s thesis · Current work
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Rendering of transparent lines using hardware-accelerated linear swept sphere primitives 
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            My thesis investigates rendering transparent lines in Vulkan using
            hardware-accelerated linear swept sphere primitives using ray-tracing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Vulkan",
              "Ray Tracing",
              "Linear Swept Spheres",
              "Transparency",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Removing overlapping-cap artifacts
          </h2>
          <div className="mt-6 h-px bg-white/10" />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="space-y-6 text-base leading-8 text-stone-300">
              <p>
                Both sides of the comparison render the same transparent LSS
                primitives. 
              </p>
              <p>
                The artifact appears when neighboring primitive caps overlap and every cap
                intersection contributes to the transparent result. In the
                corrected version, the any-hit shader calls <code className="rounded bg-white/5 px-1.5 py-0.5 text-emerald-300">IgnoreHit</code> for
                those unwanted cap intersections, allowing traversal to continue
                without accumulating the overlapping hits.
              </p>
              <p className="text-stone-400">
                The result preserves the continuous transparent line while
                removing the repeated spherical artifacts along the curve.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 md:p-5">
              <HitFilteringComparison />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
