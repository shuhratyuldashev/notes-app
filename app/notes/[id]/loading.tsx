export default function LoadingNotePage() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(60%_80%_at_50%_0%,#0b1220_0%,#0a0a0b_60%,#060607_100%)] text-zinc-100">
      <section className="relative mx-auto max-w-3xl p-6 animate-pulse">

        {/* back link */}
        <div className="mb-4 h-4 w-40 rounded bg-zinc-800" />

        {/* note card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          
          {/* header */}
          <div className="flex justify-between">
            <div className="space-y-2">
              <div className="h-6 w-40 rounded bg-zinc-800" />
              <div className="h-3 w-48 rounded bg-zinc-800" />
            </div>
            <div className="h-8 w-20 rounded bg-zinc-800" />
          </div>

          {/* title */}
          <div className="h-10 w-full rounded bg-zinc-800" />

          {/* textarea */}
          <div className="h-40 w-full rounded bg-zinc-800" />

          {/* save button */}
          <div className="flex justify-end">
            <div className="h-10 w-28 rounded bg-zinc-800" />
          </div>

        </div>

        {/* summary card */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
          <div className="h-5 w-24 rounded bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-5/6 rounded bg-zinc-800" />
          <div className="h-4 w-3/4 rounded bg-zinc-800" />
        </div>

      </section>
    </main>
  );
}