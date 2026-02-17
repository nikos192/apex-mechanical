import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motionVariants.js";

const stats = [
  { label: "Vehicles serviced", value: "8,500+" },
  { label: "Avg. turnaround", value: "48 hrs" },
  { label: "Repeat clients", value: "72%" },
];

const bullets = [
  "Factory-trained technicians",
  "Dealer-grade diagnostics",
  "Premium OEM and performance parts",
  "Digital reports with photos",
];

const brands = ["BMW", "Audi", "Mercedes", "VW"];

const TrustBand = () => (
  <section className="section-shell">
    <div className="container-base">
      <motion.div
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <p className="text-xs uppercase tracking-[0.35em] text-electric/80">Trust</p>
          <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">
            Precision backed by proven results
          </h3>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
            Every service is documented, every recommendation is justified, and every
            performance upgrade is tuned for reliability.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-steel/60 px-4 py-5">
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-charcoal p-6">
          <p className="text-sm font-semibold text-white">Why clients stay with Apex</p>
          <ul className="mt-5 grid gap-3 text-sm text-slate-300">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-electric" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">European brands</p>
            <div className="mt-4 grid grid-cols-4 gap-3 text-xs sm:text-sm text-slate-400">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="rounded-full border border-white/10 px-3 py-2 text-center"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default TrustBand;
