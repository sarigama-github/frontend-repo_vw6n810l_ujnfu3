import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Your Name — Built with love and caffeine.
        </div>
      </footer>
    </div>
  )
}

export default App
