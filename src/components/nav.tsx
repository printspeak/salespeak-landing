"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 h-20 flex items-center transition-all duration-200 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-navy/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/salespeak-logo.png"
            alt="Sales Speak"
            width={101}
            height={41}
            className="w-[101px] h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Features", href: "/#features" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Contact", href: "/#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] text-navy/65 hover:text-brand-500 transition-colors"
              style={{ fontWeight: 550 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#3a1010] text-white text-[15px] hover:bg-brand-500 transition-colors px-5 py-1.5"
          style={{ fontWeight: 550, height: 32 }}
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
