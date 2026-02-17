import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { fadeUp, stagger } from "./motionVariants.js";

const About = () => (
  <section id="about" className="section-shell">
    <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
      <div>
        <SectionHeading
          eyebrow="About"
          title="Independent expertise with a performance edge"
          subtitle="Apex Mechanical was founded with one goal — to deliver dealership-level expertise with independent honesty and care. We specialise in European vehicles, performance upgrades, and precision servicing."
        />
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            "OEM-grade parts and fluids",
            "Detailed digital service reports",
            "Performance tuning guidance",
            "Personalised maintenance plans",
          ].map((item) => (
            <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-electric" />
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute -inset-4 rounded-3xl bg-electric/10 blur-2xl" />
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
          alt="Apex Mechanical workshop"
          className="relative rounded-3xl border border-white/10 shadow-soft"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default About;
