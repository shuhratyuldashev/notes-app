export default function Loading() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(60%_80%_at_50%_0%,#0b1220_0%,#0a0a0b_60%,#060607_100%)] text-zinc-100">
      <section className="mx-auto max-w-5xl p-6 animate-pulse">

        <div className="mb-8 space-y-2">
          <div className="h-6 w-40 rounded bg-zinc-800" />
          <div className="h-4 w-64 rounded bg-zinc-800" />
        </div>

        <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="h-4 w-32 rounded bg-zinc-800 mb-4" />
          <div className="space-y-3">
            <div className="h-10 w-full rounded bg-zinc-800" />
            <div className="h-24 w-full rounded bg-zinc-800" />
            <div className="h-10 w-32 rounded bg-zinc-800" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3"
            >
              <div className="h-4 w-32 rounded bg-zinc-800" />
              <div className="h-3 w-full rounded bg-zinc-800" />
              <div className="h-3 w-5/6 rounded bg-zinc-800" />
              <div className="h-3 w-1/2 rounded bg-zinc-800" />
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}