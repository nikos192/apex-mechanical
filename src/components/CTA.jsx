import { motion } from "framer-motion";
import { fadeUp } from "./motionVariants.js";

const CTA = () => (
  <section className="section-shell">
    <div className="container-base">
      <motion.div
        className="rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(45,125,255,0.2),rgba(255,255,255,0.04),rgba(45,125,255,0.08))] p-10 md:p-14 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold">Ready to Book Your Service?</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Secure a premium service slot with our specialist team. We’ll confirm your booking and provide a clear plan for your vehicle.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-electric px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(45,125,255,0.35)]"
        >
          Book Appointment
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTA;
