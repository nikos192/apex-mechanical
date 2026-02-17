import SectionHeading from "./SectionHeading.jsx";
import { motion } from "framer-motion";
import { StarIcon } from "./Icons.jsx";
import { fadeUp, stagger } from "./motionVariants.js";

const reviews = [
  {
    name: "Daniel K.",
    car: "Porsche 911",
    text: "Best mechanic I’ve ever been to. Honest, fast, and extremely knowledgeable.",
  },
  {
    name: "Emily R.",
    car: "Audi S5",
    text: "They diagnosed a complex electrical issue in a day. Premium service from start to finish.",
  },
  {
    name: "Liam S.",
    car: "BMW M4",
    text: "My BMW feels factory fresh again. Transparent pricing and top-tier workmanship.",
  },
  {
    name: "Chris P.",
    car: "Mercedes AMG C43",
    text: "Performance upgrades done right. The team treated my car like their own.",
  },
];

const Reviews = () => (
  <section id="reviews" className="section-shell">
    <div className="container-base">
      <SectionHeading
        eyebrow="Reviews"
        title="Trusted by enthusiasts and daily drivers"
        subtitle="Our clients return because we treat every vehicle with precision, care, and total transparency."
      />
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            variants={fadeUp}
            className="glass rounded-2xl p-6 flex h-full flex-col"
          >
            <div className="flex gap-1 text-electric">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-200 leading-relaxed">“{review.text}”</p>
            <div className="mt-auto pt-6">
              <p className="text-sm font-semibold text-white">{review.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{review.car}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Reviews;
