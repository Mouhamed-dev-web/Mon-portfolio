import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Architecture } from "@/sections/Architecture";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";
import { Terminal } from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Process />
      <Architecture />
      <Testimonials />
      <Contact />
      <Footer />
      <Terminal />
    </>
  );
}
