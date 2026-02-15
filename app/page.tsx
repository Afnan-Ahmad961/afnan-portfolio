import About from "@/components/sections/About";
import Portfolio from "@/components/sections/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
    <About/>
    <Portfolio/>
    </div>
  );
}
