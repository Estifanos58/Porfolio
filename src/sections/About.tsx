'use client';

import Card from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import SectionHeader from "@/components/SectionHeader";
import mapImage from '@/assets/images/location.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import CardHeader from "@/components/CardHeader";
import Toolbox from "@/components/Toolbox";
import {motion} from 'framer-motion';
import { useRef } from "react";

const toolBoxItems = [
  {
    title:"JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title:"HTML5",
    icon: HTMLIcon,

  },
  {
    title:"CSS3",
    icon: CssIcon,

  },
  {
    title:"React",
    icon: ReactIcon,

  },
  {
    title:"Chrome",
    icon: ChromeIcon,

  },
  {
    title:"Github",
    icon: GithubIcon,

  },
]

const hobbies = [
  {
    title:"Painting",
    emoji:"🎨",
    left:'5%',
    top:'5%',
  }, 
  {
    title:"News",
    emoji:"📰",
    left:'50%',
    top:'5%',
  },
  {
    title: "Movie",
    emoji:"🎬",
    left:'35%',
    top:'40%',
  },
  {
    title: "Gaming",
    emoji:"🎮",
    left:'10%',
    top:'35%',
  },
  {
    title: "Music",
    emoji:"🎵",
    left:'70%',
    top:'45%',
  },
  {
    title: "Fitness",
    emoji:"🤾‍♂️",
    left:'5%',
    top:'65%',
  },
  {
    title: "Coding",
    emoji:"💻",
    left:'45%',
    top:'70%',
  },
]
export const AboutSection = () => {

  const constraintRef = useRef(null);

  return <div id="about" className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do,and "/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-col-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="book cover" />
            </div>   
        </Card> */}
        <Card className="h-[320px] md:col-span-5 lg:col-span-5">
              <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to creft expectational digital experiences." className=""/>
              <Toolbox toolBoxItems={toolBoxItems} className="" itemWrapperclassName="animate-move-left [animation-duration:20s]"/>
              <Toolbox toolBoxItems={toolBoxItems} className="mt-6" itemWrapperclassName="animate-move-right [animation-duration:15s]"/>
        </Card>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader title="Beyond the Code" description="Explore my interest and hobbies beyond the digital realm." className="px-6 py-6"/>
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby)=>{
                return <motion.div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full items-center py-1.5 absolute" style={{
                  left:hobby.left,
                  top:hobby.top,
                }} 
                drag
                dragConstraints={constraintRef}
                >

                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              })}
            </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/> 
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r  -z-20  from-emerald-300 to-sky-400 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r  -z-10  from-emerald-300 to-sky-400"></div>
            
            
            <Image src={smileMemoji} alt="smiling memoji" className="size-20"/>
            </div> 
            
        </Card>
      </div>
    
    </div>
    </div>
  </div>;
};
