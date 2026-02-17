import SectionHeading from "./SectionHeading.jsx";
import { ShieldIcon, PriceIcon, TechIcon, SpeedIcon } from "./Icons.jsx";

const highlights = [
  {
    title: "Expert Technicians",
    description: "Master technicians with performance and European expertise.",
    icon: ShieldIcon,
  },
  {
    title: "Honest, Transparent Pricing",
    description: "Clear quotes, no surprises, and options that fit your goals.",
    icon: PriceIcon,
  },
  {
    title: "Latest Diagnostic Equipment",
    description: "Dealer-level tools for accurate, fast troubleshooting.",
    icon: TechIcon,
  },
  {
    title: "Performance & European Specialists",
    description: "Trusted with precision builds and high-end daily drivers.",
    icon: SpeedIcon,
  },
];

const WhyChoose = () => (
  <section id="why" className="section-pad bg-charcoal/40">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Why Apex"
        title="Premium service built on trust"
        subtitle="We combine independent honesty with dealership-level expertise to deliver a premium mechanical experience."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="glass rounded-2xl p-6 flex gap-4 reveal" data-reveal>
              <div className="h-12 w-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChoose;
