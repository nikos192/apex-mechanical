import { PhoneIcon, MailIcon, PinIcon } from "./Icons.jsx";

const Contact = () => (
  <section id="contact" className="section-pad">
    <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-electric/80">Contact</p>
        <h2 className="section-title mt-3">Speak with our service team</h2>
        <p className="section-subtitle">
          Call, email, or request a booking. We respond quickly with clear, honest advice.
        </p>
        <div className="mt-8 grid gap-4">
          <div className="glass rounded-2xl p-5 flex items-center gap-4 reveal" data-reveal>
            <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-sm font-semibold">(02) 9000 4567</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 flex items-center gap-4 reveal" data-reveal>
            <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-sm font-semibold">service@apexmechanical.com</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 flex items-center gap-4 reveal" data-reveal>
            <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <PinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-sm font-semibold">23 Apex Drive, Sydney NSW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="glass rounded-3xl p-8 reveal" data-reveal>
        <form className="grid gap-5">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Vehicle</label>
            <input
              type="text"
              placeholder="BMW M3, Audi RS5"
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us what you need"
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-electric/90"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
