import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#051923] border-t border-white/10 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Pedro F. Rascón Fernandez</h3>
            <p className="text-white/70">Data Engineer & Software Developer</p>
            <p className="text-white/70">Madrid, Spain</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex gap-6">
              <Link href="#about" className="text-white/70 hover:text-[#00a6fb] transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-white/70 hover:text-[#00a6fb] transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-white/70 hover:text-[#00a6fb] transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-[#00a6fb] transition-colors">
                Contact
              </Link>
            </nav>

            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Pedro F. Rascón Fernandez. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
