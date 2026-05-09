import About from "@/components/sections/About";
import Portfolio from "@/components/sections/portfolio";
import ScrollPanelContainer from "@/components/ScrollPanelContainer";

import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <ScrollPanelContainer>
        <About key="about" />
        <Portfolio key="portfolio" />

        <Contact key="contact" />
      </ScrollPanelContainer>
      <Footer />
    </>
  );
}
