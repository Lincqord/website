import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Uniqueness from "./components/Uniqueness";
import Clients from "./components/Clients";
import CaseStudy from "./components/CaseStudy";
import MidCTA from "./components/MidCTA";
import News from "./components/News";
import Contact from "./components/Contact";
import WaveDivider from "./components/WaveDivider";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WaveDivider from="white" to="surface" />
      <Problem />
      <WaveDivider from="surface" to="white" flip />
      <Services />
      <WaveDivider from="white" to="surface" />
      <Uniqueness />
      <WaveDivider from="surface" to="white" flip />
      <Clients />
      <WaveDivider from="white" to="surface" />
      <CaseStudy />
      <WaveDivider from="surface" to="white" flip />
      <MidCTA />
      <News />
      <WaveDivider from="white" to="surface" />
      <Contact />
    </main>
  );
}
