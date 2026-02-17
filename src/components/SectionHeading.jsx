import { motion } from "framer-motion";
import { fadeUp } from "./motionVariants.js";

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
  >
    <p className="text-xs uppercase tracking-[0.35em] text-electric/80">{eyebrow}</p>
    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
      {title}
    </h2>
    <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl">
      {subtitle}
    </p>
  </motion.div>
);

export default SectionHeading;
