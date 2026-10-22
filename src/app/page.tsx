import {
  ContactForm,
  CTABand,
  FAQ,
  FeatureGrid,
  Footer,
  Gallery,
  Hero,
  LogoStrip,
  Navbar,
  StatsRow,
  Testimonials,
  WhatsAppButton,
} from "@/components/sections";

// Home is composed only from sections; each reads its own slice of siteConfig.
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <LogoStrip />
        <FeatureGrid />
        <StatsRow />
        <Gallery tone="surface" />
        <Testimonials />
        <FAQ />
        <CTABand />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
