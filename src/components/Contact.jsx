import { motion } from "framer-motion";
import { PhoneIcon, MailIcon, PinIcon } from "./Icons.jsx";
import { fadeUp, stagger } from "./motionVariants.js";

const Contact = () => (
  <section id="contact" className="section-shell">
    <div className="container-base grid gap-10 lg:grid-cols-[1fr_1.1fr]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-electric/80">Contact</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Speak with our service team</h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
          Call, email, or request a booking. We respond quickly with clear, honest advice.
        </p>
        <motion.div
          className="mt-8 grid gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="glass rounded-2xl p-5 flex items-center gap-4">
            <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-sm font-semibold">(02) 9000 4567</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-2xl p-5 flex items-center gap-4">
            <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-sm font-semibold">service@apexmechanical.com</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-2xl p-5 flex items-center gap-4">
            <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <PinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-sm font-semibold">23 Apex Drive, Sydney NSW</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-2xl p-5 flex items-center gap-4">
            <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <span className="text-sm font-semibold">H</span>
            </span>
            <div>
              <p className="text-xs text-slate-400">Hours</p>
              <p className="text-sm font-semibold">Mon - Sat: 8:00am - 6:00pm</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="glass rounded-3xl p-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <form className="grid gap-5">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="mt-2 w-full rounded-xl bg-steel/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="mt-2 w-full rounded-xl bg-steel/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Vehicle</label>
            <input
              type="text"
              placeholder="BMW M3, Audi RS5"
              className="mt-2 w-full rounded-xl bg-steel/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us what you need"
              className="mt-2 w-full rounded-xl bg-steel/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(45,125,255,0.35)]"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
