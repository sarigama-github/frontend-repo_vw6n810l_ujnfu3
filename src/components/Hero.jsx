import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Open to opportunities
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Fresher Portfolio
          </h1>
          <p className="mt-4 text-slate-700/90 sm:text-lg">
            I build with C, C++, Python and love AIML + DSA. Here are a few projects that showcase my learning journey.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="pointer-events-auto rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-slate-800">
              See Projects
            </a>
            <a href="#contact" className="pointer-events-auto rounded-xl bg-white/70 px-5 py-3 text-slate-900 shadow-sm ring-1 ring-slate-900/10 backdrop-blur transition hover:bg-white">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
