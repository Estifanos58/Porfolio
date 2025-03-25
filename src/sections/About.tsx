import Card from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import SectionHeader from "@/components/SectionHeader";
import TechIcon from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import CardHeader from "@/components/CardHeader";
import Toolbox from "@/components/Toolbox";

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
    title:"Photography",
    emoji:"📸",
    left:'50%',
    top:'5%',
  },
  {
    title: "Hiking",
    emoji:"🧗",
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
    title: "Reading",
    emoji:"📖",
    left:'45%',
    top:'70%',
  },
]
export const AboutSection = () => {
  return <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do,and "/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-col-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="book cover" />
            </div>   
        </Card>
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to creft expectational digital experiences." className=""/>
              <Toolbox toolBoxItems={toolBoxItems} className=""/>
              <Toolbox toolBoxItems={toolBoxItems} className="mt-6" itemWrapperclassName="-translate-x-1/2"/>
        </Card>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader title="Beyond the Code" description="Explore my interest and hobbies beyond the digital realm." className="px-6 py-6"/>
            <div className="relative flex-1">
              {hobbies.map((hobby)=>{
                return <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full items-center py-1.5 absolute" style={{
                  left:hobby.left,
                  top:hobby.top,
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              })}
            </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/> 
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <Image src={smileMemoji} alt="smiling memoji" />
              </div> 
            
        </Card>
      </div>
    
    </div>
    </div>
  </div>;
};
