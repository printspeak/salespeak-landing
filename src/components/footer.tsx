import Image from "next/image"
import Link from "next/link"

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/#contact" },
      { label: "Print Speak", href: "https://printspeak.com" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="border-t border-navy/7 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/salespeak-logo.png"
                alt="Sales Speak"
                width={226}
                height={82}
                className="w-[110px] h-auto"
              />
              <p className="mt-3 text-xs text-navy/40 max-w-[200px]">
                Sales intelligence for print businesses.
              </p>
            </div>
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold text-navy uppercase tracking-wider">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-navy/50 hover:text-navy transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-navy/7 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-navy/40">2025 SalesSpeak. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
