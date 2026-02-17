import SectionHeading from "./SectionHeading.jsx";
import { StarIcon } from "./Icons.jsx";

const reviews = [
  {
    name: "Daniel K.",
    text: "Best mechanic I’ve ever been to. Honest, fast, and extremely knowledgeable.",
  },
  {
    name: "Emily R.",
    text: "They diagnosed a complex electrical issue in a day. Premium service from start to finish.",
  },
  {
    name: "Liam S.",
    text: "My BMW feels factory fresh again. Transparent pricing and top-tier workmanship.",
  },
  {
    name: "Chris P.",
    text: "Performance upgrades done right. The team treated my car like their own.",
  },
];

const Reviews = () => (
  <section id="reviews" className="section-pad bg-charcoal/40">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Reviews"
        title="Trusted by enthusiasts and daily drivers"
        subtitle="Our clients return because we treat every vehicle with precision, care, and total transparency."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.name} className="glass rounded-2xl p-6 reveal" data-reveal>
            <div className="flex gap-1 text-electric">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-200">“{review.text}”</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
