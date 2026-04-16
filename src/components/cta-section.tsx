export default function CtaSection() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#2a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0a0a]/80 via-[#2a0a0a]/70 to-[#2a0a0a]/90" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <h2 className="animate-fade-in-up text-5xl font-semibold text-white tracking-tight text-balance">
          Ready to close more deals?
        </h2>

        <p className="animate-fade-in-up animate-delay-200 mt-4 text-base text-white max-w-xl mx-auto">
          Get real-time sales intelligence that helps your team sell smarter.
        </p>

        <div className="animate-fade-in-up animate-delay-300 mt-8 flex justify-center gap-3 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-navy text-sm hover:bg-navy/5 transition-colors px-5 py-2"
            style={{ fontWeight: 550, height: 38 }}
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full text-white text-sm ring-1 ring-white/20 hover:ring-white/40 transition-colors px-5 py-2"
            style={{ fontWeight: 550, height: 38 }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
