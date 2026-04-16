import { BarChart3, TrendingUp, Zap, Target, Users, Globe } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Variant = "yellow" | "navy" | "blue"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  variant: Variant
  span: number
}

const rows: Feature[][] = [
  [
    {
      icon: BarChart3,
      title: "Pipeline Visibility",
      description:
        "See every quote, every opportunity, and every follow-up in one place. Real-time dashboards that show exactly where your revenue stands.",
      variant: "navy",
      span: 4,
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description:
        "Track win rates, quote values, and rep performance. Spot trends before they become problems.",
      variant: "navy",
      span: 2,
    },
  ],
  [
    {
      icon: Zap,
      title: "Automated Follow-Ups",
      description:
        "Never let a quote go cold. Automated reminders and pre-built templates keep your pipeline moving.",
      variant: "yellow",
      span: 2,
    },
    {
      icon: Target,
      title: "Quote Management",
      description:
        "Track every estimate from creation to close. Know which quotes need attention right now.",
      variant: "yellow",
      span: 2,
    },
    {
      icon: Users,
      title: "Team Performance",
      description:
        "See who is converting, who needs support, and where coaching will have the biggest impact.",
      variant: "yellow",
      span: 2,
    },
  ],
  [
    {
      icon: Globe,
      title: "Access Anywhere",
      description:
        "Browser-based with no setup required. Your team can check pipeline, update quotes, and follow up from anywhere.",
      variant: "blue",
      span: 3,
    },
    {
      icon: BarChart3,
      title: "Built for Print",
      description:
        "Purpose-built for print businesses. Integrates with PrintSmith Vision so your data is always in sync.",
      variant: "blue",
      span: 3,
    },
  ],
]

const spanClass: Record<number, string> = {
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
}

const delayClasses = ["animate-delay-100", "animate-delay-200", "animate-delay-300"]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <p className="font-mono uppercase tracking-[0.1em] text-[13px] font-medium text-navy/40">
            FEATURES
          </p>
          <div className="mt-6 max-w-[44ch]">
            <h2 className="text-4xl font-medium tracking-tight">
              <span className="text-navy">Everything your sales team needs </span>
              <span className="text-navy/65">to close more business.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {row.map((f, i) => {
                const bg =
                  f.variant === "navy"
                    ? "bg-[#3a1010] ring-[#3a1010]/20"
                    : f.variant === "blue"
                      ? "bg-brand-500 ring-brand-500/20"
                      : "bg-[#fffdf1] ring-navy/10"
                const isDark = f.variant === "navy" || f.variant === "blue"
                return (
                  <div
                    key={f.title}
                    className={`animate-fade-in-up ${delayClasses[i % 3]} col-span-1 ${spanClass[f.span]} rounded-2xl p-6 sm:p-8 ring-1 ${bg}`}
                  >
                    <f.icon
                      className={isDark ? "text-white/80" : "text-navy"}
                      size={36}
                      strokeWidth={1.4}
                    />
                    <p className={`mt-4 text-sm font-medium ${isDark ? "text-white" : "text-navy"}`}>
                      {f.title}
                    </p>
                    <p className={`mt-2 text-[13px] leading-relaxed ${isDark ? "text-white/65" : "text-navy/65"}`}>
                      {f.description}
                    </p>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
