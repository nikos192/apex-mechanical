import SectionHeading from "./SectionHeading.jsx";
import {
  WrenchIcon,
  ScanIcon,
  BrakeIcon,
  EngineIcon,
  BoltIcon,
  GearIcon,
} from "./Icons.jsx";

const services = [
  {
    title: "Logbook Servicing",
    description: "Maintain warranty with OEM-spec servicing and transparent reporting.",
    icon: WrenchIcon,
  },
  {
    title: "Diagnostics & Fault Finding",
    description: "Factory-grade scans to pinpoint issues quickly and accurately.",
    icon: ScanIcon,
  },
  {
    title: "Brake & Suspension Repairs",
    description: "Performance braking and suspension tuning for precise handling.",
    icon: BrakeIcon,
  },
  {
    title: "Engine Repairs",
    description: "From minor leaks to rebuilds, we restore peak performance.",
    icon: EngineIcon,
  },
  {
    title: "Performance Upgrades",
    description: "Turbo, exhaust, and ECU upgrades engineered for reliability.",
    icon: BoltIcon,
  },
  {
    title: "General Mechanical Repairs",
    description: "High-quality repairs with premium parts and honest advice.",
    icon: GearIcon,
  },
];

const Services = () => (
  <section id="services" className="section-pad">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Services"
        title="Specialist mechanical care for every drive"
        subtitle="Precision servicing and performance upgrades delivered by expert technicians using cutting-edge diagnostic tools."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="glass rounded-2xl p-6 transition hover:border-white/30 reveal" data-reveal>
              <div className="h-12 w-12 rounded-xl bg-electric/15 text-electric flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
