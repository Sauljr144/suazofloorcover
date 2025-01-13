import About from "@/components/atomic/organisms/about/About";
import Contact from "@/components/atomic/organisms/contact/Contact";
import Hero from "@/components/atomic/organisms/hero/Hero";
import Services from "@/components/atomic/organisms/servicetypes/Services";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </>
  );
}
