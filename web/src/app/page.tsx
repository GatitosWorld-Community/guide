export default function Home() {
  return (
    <main className="container py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[--color-nebula-400] via-[--color-aurora-500] to-[--color-nebula-500]">
          GW Guide
        </h1>
        <p className="text-[oklch(88%_0.06_240)] max-w-prose">
          Una enciclopedia astral de nuestra comunidad. Próximamente migrada a Next.js con Payload y Convex.
        </p>
        <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 gap-6">
          <a className="rounded-xl bg-[--color-space-900] ring-1 ring-white/10 p-6 hover:bg-[--color-space-800] transition">
            <h3 className="text-lg font-medium mb-1">Reglas</h3>
            <p className="text-sm text-white/70">Conoce las leyes que rigen el cosmos de Gatitos World.</p>
          </a>
          <a className="rounded-xl bg-[--color-space-900] ring-1 ring-white/10 p-6 hover:bg-[--color-space-800] transition">
            <h3 className="text-lg font-medium mb-1">Protocolos</h3>
            <p className="text-sm text-white/70">Procedimientos para una moderación serena y estelar.</p>
          </a>
          <a className="rounded-xl bg-[--color-space-900] ring-1 ring-white/10 p-6 hover:bg-[--color-space-800] transition">
            <h3 className="text-lg font-medium mb-1">Changelog</h3>
            <p className="text-sm text-white/70">Novedades y crónicas del viaje.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
