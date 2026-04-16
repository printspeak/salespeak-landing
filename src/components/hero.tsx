function NetworkBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="100" cy="50" r="3" fill="#CC0000" opacity="0.18" />
        <circle cx="300" cy="30" r="2.5" fill="#CC0000" opacity="0.22" />
        <circle cx="500" cy="80" r="4" fill="#CC0000" opacity="0.16" />
        <circle cx="700" cy="40" r="3" fill="#CC0000" opacity="0.2" />
        <circle cx="900" cy="70" r="2.5" fill="#CC0000" opacity="0.18" />
        <circle cx="1100" cy="50" r="3" fill="#CC0000" opacity="0.15" />
        <circle cx="1300" cy="80" r="2.5" fill="#CC0000" opacity="0.12" />
        <circle cx="200" cy="160" r="3.5" fill="#CC0000" opacity="0.2" />
        <circle cx="640" cy="150" r="3" fill="#CC0000" opacity="0.18" />
        <circle cx="850" cy="170" r="3.5" fill="#CC0000" opacity="0.22" />
        <circle cx="1050" cy="160" r="2.5" fill="#CC0000" opacity="0.15" />
        <circle cx="280" cy="280" r="3" fill="#CC0000" opacity="0.18" />
        <circle cx="750" cy="260" r="3" fill="#CC0000" opacity="0.2" />
        <circle cx="1150" cy="270" r="3" fill="#CC0000" opacity="0.12" />
        <line x1="100" y1="50" x2="300" y2="30" stroke="#CC0000" strokeWidth="0.8" opacity="0.1" />
        <line x1="300" y1="30" x2="500" y2="80" stroke="#CC0000" strokeWidth="0.8" opacity="0.08" />
        <line x1="500" y1="80" x2="700" y2="40" stroke="#CC0000" strokeWidth="0.8" opacity="0.1" />
        <line x1="700" y1="40" x2="900" y2="70" stroke="#CC0000" strokeWidth="0.8" opacity="0.08" />
        <line x1="900" y1="70" x2="1100" y2="50" stroke="#CC0000" strokeWidth="0.8" opacity="0.1" />
        <line x1="1100" y1="50" x2="1300" y2="80" stroke="#CC0000" strokeWidth="0.8" opacity="0.08" />
        <line x1="200" y1="160" x2="640" y2="150" stroke="#CC0000" strokeWidth="0.8" opacity="0.07" />
        <line x1="640" y1="150" x2="850" y2="170" stroke="#CC0000" strokeWidth="0.8" opacity="0.08" />
        <line x1="850" y1="170" x2="1050" y2="160" stroke="#CC0000" strokeWidth="0.8" opacity="0.07" />
        <line x1="280" y1="280" x2="750" y2="260" stroke="#CC0000" strokeWidth="0.8" opacity="0.07" />
        <line x1="750" y1="260" x2="1150" y2="270" stroke="#CC0000" strokeWidth="0.8" opacity="0.06" />
        <line x1="100" y1="50" x2="200" y2="160" stroke="#CC0000" strokeWidth="0.8" opacity="0.08" />
        <line x1="700" y1="40" x2="850" y2="170" stroke="#CC0000" strokeWidth="0.8" opacity="0.08" />
      </svg>
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-brand-500/[0.05] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-brand-500/[0.03] rounded-full blur-3xl" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <NetworkBg />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-0">
          <div className="animate-fade-in-up lg:w-3/5 lg:pr-12">
            <p className="font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-brand-500">
              SALES INTELLIGENCE
            </p>
            <h1
              className="hero-headline relative mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.08]"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Sell smarter. Close faster. Grow bigger.
            </h1>
          </div>

          <div className="animate-fade-in-up animate-delay-200 lg:w-2/5 lg:pt-1">
            <p className="mt-2 max-w-[40ch] text-base font-normal text-navy/65">
              SalesSpeak gives your sales team real-time pipeline visibility, automated follow-ups, and the insights they need to turn more quotes into orders.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#3a1010] px-5 py-2 text-sm text-white transition-all hover:bg-brand-500"
                style={{ fontWeight: 550 }}
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm text-navy/55 ring-1 ring-navy/10 transition-all hover:text-brand-500 hover:ring-brand-500/30"
                style={{ fontWeight: 550 }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
