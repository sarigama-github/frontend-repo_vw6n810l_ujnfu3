import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="text-lg font-bold tracking-tight text-slate-900">
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent">My Portfolio</span>
            </a>

            <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-slate-900 transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-white/70"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/30 px-4 py-3 sm:px-6">
              <nav className="flex flex-col gap-3 text-sm">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 hover:bg-white/70"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
