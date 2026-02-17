import About from "@/components/sections/About";
import Portfolio from "@/components/sections/portfolio";
import ScrollPanelContainer from "@/components/ScrollPanelContainer";
import Workflow from "@/components/sections/Workflow";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ScrollPanelContainer>
        <About key="about" />
        <Portfolio key="portfolio" />
        <Workflow key="workflow" />
      </ScrollPanelContainer>
    </>
  );
}
