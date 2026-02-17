import heroImage from "../assets/apex mechanical hero.png";

const Hero = () => (
  <section className="relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-65"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/40 to-midnight/85" />
    <div className="relative section-pad min-h-[82vh] flex flex-col justify-center">
      <div className="max-w-3xl reveal" data-reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-slate-200">
          Precision + Performance
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Precision Mechanical Service. No Compromises.
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Apex Mechanical delivers expert servicing, diagnostics, and performance
          upgrades with unmatched attention to detail.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-electric/90"
          >
            Book Service
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            View Services
          </a>
        </div>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { label: "European Specialists", value: "BMW • Audi • Mercedes" },
          { label: "Performance Focused", value: "Diagnostics + Tuning" },
          { label: "Trusted by Enthusiasts", value: "5-star rated" },
        ].map((item) => (
          <div key={item.label} className="glass rounded-2xl p-5 reveal" data-reveal>
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
