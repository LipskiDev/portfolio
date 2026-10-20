import { Link } from "react-router-dom";
import pathTracerImage from "../assets/optimized/nvrhi-pt.webp";

export default function NvrhiPathTracer() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        <Link to="/">← Back home</Link>
        <section className="mt-16">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Path tracing</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">NVRHI Path Tracer</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            I used NVIDIA’s NVRHI rendering hardware interface to write a simple path tracer.
          </p>
          <figure className="mt-10 overflow-hidden border border-white/10">
            <img src={pathTracerImage} alt="Path-traced scene with a teapot, purple dragon, and blue bunny in a room with colored walls" width={1600} height={872} decoding="async" className="block h-auto w-full" />
          </figure>
        </section>
      </div>
    </main>
  );
}
