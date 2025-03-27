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
      <div className=" hidden md:flex absolute flex-col gap-10 items-center md:top-[600px] lg:top-[500px] lg:h-[500vh] md:h-[400vh] ">
        <div className="border-white border-2 h-[400px]" style={{
        writingMode:'vertical-rl'
      }}></div>
        <p className="lg:text-[50px] md:text-[30px] font-serif font-bold tracking-[10px]"  style={{
        writingMode: 'vertical-rl',
      }}>Estifanos Kebede - Full Stack Web Developer</p>
      <div className=" border-white border-2 h-[400px]" style={{
        writingMode:'vertical-rl'
      }}></div>
        </div>
      <Header/>
      <HeroSection />
      <ProjectsSection />
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection />
      <ContactSection/>
      <Footer/>
    </div>
  );
}
