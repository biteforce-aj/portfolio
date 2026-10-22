import {
  AboutIntro,
  ContactBand,
  CredentialStrip,
  Footer,
  Hero,
  Navbar,
  ServiceList,
  StatusBar,
  WorkIndex,
} from "@/components/sections";

// Home is composed only from sections; each reads its own slice of siteConfig.
export default function Home() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="main" className="flex-1 overflow-x-clip">
        <Hero />
        <CredentialStrip />
        <WorkIndex />
        <ServiceList />
        <AboutIntro />
        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
