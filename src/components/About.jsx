import SectionHeading from "./SectionHeading.jsx";

const About = () => (
  <section id="about" className="section-pad">
    <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
      <div>
        <SectionHeading
          eyebrow="About"
          title="Independent expertise with a performance edge"
          subtitle="Apex Mechanical was founded with one goal — to deliver dealership-level expertise with independent honesty and care. We specialise in European vehicles, performance upgrades, and precision servicing."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "OEM-grade parts and fluids",
            "Detailed digital service reports",
            "Performance tuning guidance",
            "Personalised maintenance plans",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-200 reveal" data-reveal>
              <span className="h-2 w-2 rounded-full bg-electric" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="relative reveal" data-reveal>
        <div className="absolute -inset-4 rounded-3xl bg-electric/10 blur-2xl" />
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
          alt="Apex Mechanical workshop"
          className="relative rounded-3xl border border-white/10 shadow-soft"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default About;
