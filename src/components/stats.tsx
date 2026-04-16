const stats = [
  { value: "100%", label: "Quote Follow-Up" },
  { value: "24/7", label: "Pipeline Access" },
  { value: "Real-time", label: "Data Sync" },
  { value: "Zero", label: "Manual Entry" },
]

const delayClasses = ["animate-delay-100", "animate-delay-200", "animate-delay-300", "animate-delay-400"]

export default function Stats() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <p className="font-mono uppercase tracking-[0.1em] text-[13px] font-medium text-navy/40">
            BY THE NUMBERS
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-fade-in-up ${delayClasses[i]} py-4 ${i > 0 ? "border-l border-navy/7 pl-8" : "pl-0"}`}
            >
              <p
                className="text-4xl md:text-5xl lg:text-6xl text-navy tracking-tighter whitespace-nowrap"
                style={{ fontWeight: 400 }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-navy/65" style={{ fontWeight: 400 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
