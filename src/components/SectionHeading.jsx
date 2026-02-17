const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div data-reveal className="reveal">
    <p className="text-xs uppercase tracking-[0.3em] text-electric/80">{eyebrow}</p>
    <h2 className="section-title mt-3">{title}</h2>
    <p className="section-subtitle">{subtitle}</p>
  </div>
);

export default SectionHeading;
