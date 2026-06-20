import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Uniqueness from "./components/Uniqueness";
import Clients from "./components/Clients";
import CaseStudy from "./components/CaseStudy";
import MidCTA from "./components/MidCTA";
import News from "./components/News";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Problem />
      <Services />
      <Uniqueness />
      <Clients />
      <CaseStudy />
      <MidCTA />
      <News />
      <Contact />
    </main>
  );
}
