import Nav from "@/components/nav"
import Hero from "@/components/hero"
import SectionDivider from "@/components/section-divider"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Stats from "@/components/stats"
import CtaSection from "@/components/cta-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="canvas-grid">
      <Nav />
      <Hero />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <CtaSection />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </div>
  )
}
