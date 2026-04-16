"use client"

import { useState } from "react"

const bullets = [
  "See SalesSpeak in action with a live demo",
  "Discuss how it integrates with your workflow",
  "Get pricing and deployment options",
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="animate-fade-in-up">
            <p className="font-mono uppercase tracking-[0.1em] text-[13px] font-medium text-navy/40">
              GET IN TOUCH
            </p>

            <h2 className="mt-6 max-w-[40ch] text-4xl font-medium tracking-tight">
              <span className="text-navy">Let&apos;s talk about </span>
              <span className="text-navy/65">how SalesSpeak can help your team sell more.</span>
            </h2>

            <div className="mt-8 space-y-4">
              {bullets.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                  <p className="text-sm text-navy/65">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            {submitted ? (
              <div className="rounded-2xl bg-[#fffdf1] ring-1 ring-navy/10 p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[380px]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-4 text-lg font-medium text-navy">Thanks! We&apos;ll be in touch.</p>
                <p className="mt-2 text-sm text-navy/65">We typically respond within one business day.</p>
              </div>
            ) : (
              <form
                className="rounded-2xl bg-[#fffdf1] ring-1 ring-navy/10 p-8 sm:p-10 space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: new FormData(form),
                  })
                  setSubmitted(true)
                }}
              >
                <input type="hidden" name="access_key" value="18e6d249-7199-43af-8cc8-9746475c4d7b" />
                <input type="hidden" name="subject" value="SalesSpeak.com Contact" />
                <input type="hidden" name="from_name" value="SalesSpeak Website" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-navy mb-1.5">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-navy/10 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-navy mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-navy/10 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[13px] font-medium text-navy mb-1.5">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Print Co."
                    className="w-full rounded-lg border border-navy/10 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-navy mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your sales team..."
                    className="w-full rounded-lg border border-navy/10 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-500 text-white text-sm hover:bg-brand-600 px-5 py-2.5 transition-colors"
                  style={{ fontWeight: 550 }}
                >
                  Send Message
                </button>

                <p className="text-[11px] font-medium text-navy text-center">
                  We&apos;ll reach out within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
