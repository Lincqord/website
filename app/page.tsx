import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Clients from "./components/Clients";
import CaseStudy from "./components/CaseStudy";
import News from "./components/News";
import Contact from "./components/Contact";
import WaveDivider from "./components/WaveDivider";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero (white aurora) → Challenges (white): 地続きで境目なし */}
      <Hero />
      <Problem />

      <WaveDivider from="white" to="surface" />
      <Services />

      <WaveDivider from="surface" to="white" />
      <Clients />

      <WaveDivider from="white" to="surface" />
      <CaseStudy />

      <WaveDivider from="surface" to="white" />
      <News />

      <WaveDivider from="white" to="surface" />
      <Contact />
    </main>
  );
}
