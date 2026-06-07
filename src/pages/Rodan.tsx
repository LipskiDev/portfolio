import { Link } from "react-router-dom";

export default function Rodan() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link to="/" className="text-sm text-stone-400 hover:text-white">
          ← Back home
        </Link>

        <p className="mt-16 text-sm uppercase tracking-[0.24em] text-stone-500">
          Render Engine
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">Rodan</h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
          Rodan is my render engine layer built on top of Velos.
        </p>
      </div>
    </main>
  );
}