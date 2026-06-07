import { Link } from "react-router-dom";

export default function Velos() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link to="/" className="text-sm text-stone-400 hover:text-white">
          ← Back home
        </Link>

        <p className="mt-16 text-sm uppercase tracking-[0.24em] text-stone-500">
          Vulkan RHI
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">Velos</h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
          Velos is my low-level rendering hardware interface with a Vulkan backend.
        </p>
      </div>
    </main>
  );
}