const CTA = () => (
  <section className="section-pad">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-electric/20 via-white/5 to-electric/5 border border-white/10 p-10 md:p-14 text-center reveal" data-reveal>
        <h2 className="text-3xl sm:text-4xl font-semibold">Ready to Book Your Service?</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Secure a premium service slot with our specialist team. We’ll confirm your booking and provide a clear plan for your vehicle.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-electric/90"
        >
          Book Appointment
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
