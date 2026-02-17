import { motion } from "framer-motion";
import heroImage from "../assets/apex mechanical hero.png";
import { fadeUp, stagger, fadeIn } from "./motionVariants.js";

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.92)_0%,rgba(11,11,11,0.72)_48%,rgba(11,11,11,0.35)_70%,rgba(11,11,11,0)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.65)_100%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />

    <div className="relative container-base min-h-screen flex items-center">
      <motion.div
        className="max-w-xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-200"
        >
          Precision + Performance
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
        >
          Precision Mechanical Service. No Compromises.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-base sm:text-lg text-slate-300">
          Apex Mechanical delivers expert servicing, diagnostics, and performance
          upgrades with unmatched attention to detail.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(45,125,255,0.35)]"
          >
            Book Service
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            View Services
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-6 text-xs sm:text-sm text-slate-300">
          4.9★ (180+ reviews) • European specialists • Same-day diagnostics
        </motion.div>
      </motion.div>
    </div>

    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-slate-400"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <span>Scroll</span>
      <span className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent" />
    </motion.div>
  </section>
);

export default Hero;
