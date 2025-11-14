import { Code2, BrainCircuit, Sparkles, Mail, Github, Linkedin, Award } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About me</h2>
            <p className="mt-4 text-slate-700">
              I'm a fresher passionate about crafting useful things with code. I enjoy solving problems, learning fast, and turning ideas into minimal, working products. Currently exploring AI/ML, computer vision, and clean software design.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><Award size={18} className="text-indigo-600" /> Consistent learner with hands-on mini projects</li>
              <li className="flex items-center gap-3"><Sparkles size={18} className="text-indigo-600" /> Strong fundamentals in DSA and problem solving</li>
              <li className="flex items-center gap-3"><BrainCircuit size={18} className="text-indigo-600" /> Interested in AI/ML, data, and vision</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/20 bg-white/60 p-6 backdrop-blur">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { t: 'C', c: 'bg-cyan-50 text-cyan-700 ring-cyan-200' },
                  { t: 'C++', c: 'bg-indigo-50 text-indigo-700 ring-indigo-200' },
                  { t: 'Python', c: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
                  { t: 'AIML', c: 'bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200' },
                  { t: 'DSA', c: 'bg-rose-50 text-rose-700 ring-rose-200' },
                  { t: 'Git', c: 'bg-amber-50 text-amber-700 ring-amber-200' },
                ].map((k) => (
                  <div key={k.t} className={`rounded-2xl border border-white/50 p-5 text-center text-sm font-semibold ring-1 ${k.c}`}>
                    {k.t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const items = [
    { name: 'C', level: 'Intermediate' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'AIML', level: 'Learning' },
    { name: 'DSA', level: 'Intermediate' },
  ]
  return (
    <section id="skills" className="relative scroll-mt-20 bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <Code2 className="text-indigo-600" size={20} />
                <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">Proficiency: {s.level}</p>
              <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500" style={{ width: `${s.level === 'Advanced' ? 90 : s.level === 'Intermediate' ? 70 : 50}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      title: 'Titanic Survival Prediction',
      stack: ['Python', 'Pandas', 'Scikit-learn'],
      desc: 'Built a classifier to predict survival using feature engineering and cross-validation.',
    },
    {
      title: 'Handwritten Digit Recognition',
      stack: ['Python', 'TensorFlow', 'Keras'],
      desc: 'CNN trained on MNIST with data augmentation and early stopping to improve accuracy.',
    },
    {
      title: 'Face Mask Detector',
      stack: ['OpenCV', 'Python', 'MobileNetV2'],
      desc: 'Real-time mask detection using OpenCV video stream and transfer learning.',
    },
    {
      title: 'House Price Prediction',
      stack: ['Python', 'XGBoost'],
      desc: 'Gradient boosted regressor predicting prices with hyperparameter tuning.',
    },
    {
      title: 'Image Colorization',
      stack: ['OpenCV', 'U-Net'],
      desc: 'Converted grayscale images to color using an encoder-decoder network.',
    },
    {
      title: 'Object Tracking',
      stack: ['OpenCV', 'Python'],
      desc: 'Implemented multi-object tracking with Kalman filter and SORT approach.',
    },
  ]

  return (
    <section id="projects" className="relative scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects</h2>
          <a href="#contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Need a collaborator?</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="h-36 bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-cyan-100" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact me</h2>
            <p className="mt-4 text-slate-700">I’m actively looking for internships and entry-level roles. Feel free to reach out!</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"><Mail size={16} /> Email</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"><Github size={16} /> GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2" placeholder="Say hello..." />
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-500">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
