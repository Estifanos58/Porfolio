import SideName from "@/components/SideName";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <div className="relative">
       <SideName/>
        <Header home="#home" about="#about" contact="#contact" project="#project"/>
        <HeroSection />
        <ProjectsSection />
        <TapeSection/>
        {/* <TestimonialsSection/> */}
        <AboutSection />
        <ContactSection/>
        <Footer/>

      
    </div>
  );
}
