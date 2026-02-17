import About from "@/components/sections/About";
import Portfolio from "@/components/sections/portfolio";
import ScrollPanelContainer from "@/components/ScrollPanelContainer";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
  return (
    <ScrollPanelContainer>
      <About key="about" />
      <Portfolio key="portfolio" />
      <Workflow key="workflow" />
    </ScrollPanelContainer>
  );
}
