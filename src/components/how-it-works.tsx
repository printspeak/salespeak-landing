const steps = [
  {
    number: 1,
    title: "Connect",
    description:
      "SalesSpeak pulls data directly from PrintSmith Vision. No manual entry, no double-handling. Your pipeline is always up to date.",
    variant: "yellow" as const,
  },
  {
    number: 2,
    title: "Track",
    description:
      "See every quote, follow-up, and opportunity in real time. Dashboards surface what needs attention so nothing slips through.",
    variant: "navy" as const,
  },
  {
    number: 3,
    title: "Close",
    description:
      "Automated follow-ups and smart reminders keep deals moving. Your team focuses on selling, not chasing.",
    variant: "yellow" as const,
  },
]

const variantClasses = {
  navy: {
    card: "ring-[#3a1010]/20 bg-[#3a1010]",
    number: "text-white/10",
    title: "text-white",
    body: "text-white/65",
  },
  yellow: {
    card: "ring-navy/10 bg-[#fffdf1]",
    number: "text-navy/10",
    title: "text-navy",
    body: "text-navy/65",
  },
}

const delayClasses = ["animate-delay-200", "animate-delay-300", "animate-delay-400"]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-navy/40">
            HOW IT WORKS
          </p>
          <h2 className="mt-6 max-w-[40ch] text-4xl font-medium tracking-tight">
            <span className="text-navy">Three steps </span>
            <span className="text-navy/65">to a better sales process.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const v = variantClasses[step.variant]
            return (
              <div
                key={step.number}
                className={`animate-fade-in-up ${delayClasses[i]} flex min-h-[320px] flex-col overflow-hidden rounded-xl ring-1 ${v.card}`}
              >
                <div className="flex h-48 items-center justify-center">
                  <span className={`text-[120px] font-bold ${v.number}`}>{step.number}</span>
                </div>
                <div className="flex-1 p-6">
                  <h3 className={`font-medium ${v.title}`}>{step.title}</h3>
                  <p className={`mt-2 text-[13px] leading-relaxed ${v.body}`}>{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
