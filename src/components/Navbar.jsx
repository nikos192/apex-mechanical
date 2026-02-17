import logo from "../assets/apex logo.png";

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-sm text-slate-300 hover:text-white transition"
  >
    {label}
  </a>
);

const Navbar = () => (
  <header className="sticky top-0 z-30 bg-midnight/80 backdrop-blur-xl border-b border-white/10">
    <nav className="container-base py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
          <img src={logo} alt="Apex Mechanical logo" className="h-7 w-7 object-contain" />
        </span>
        <div>
          <p className="text-base font-semibold tracking-wide">Apex Mechanical</p>
          <p className="text-xs text-slate-400">Performance Workshop</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <NavLink href="#services" label="Services" />
        <NavLink href="#why" label="Why Apex" />
        <NavLink href="#about" label="About" />
        <NavLink href="#reviews" label="Reviews" />
        <NavLink href="#contact" label="Contact" />
      </div>
      <a
        href="#contact"
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(45,125,255,0.35)]"
      >
        Book Service
      </a>
    </nav>
  </header>
);

export default Navbar;
