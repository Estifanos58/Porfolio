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
  }, 
  {
    title:"Photography",
    emoji:"📸",
  },
  {
    title: "Gaming",
    emoji:"🎮",
  },
  {
    title: "Hiking",
    emoji:"🧗",
  },
  {
    title: "Music",
    emoji:"🎵",
  },
  {
    title: "Fitness",
    emoji:"🤾‍♂️",
  },
  {
    title: "Reading",
    emoji:"📖",
  },
]
export const AboutSection = () => {
  return <div className="py-20">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do,and "/>
    <div className="mt-20 flex flex-col gap-8">
      <Card className="h-[320px]">
        <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
          <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="book cover" />
          </div>   
      </Card>
      <Card className="h-[320px] p-0">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to creft expectational digital experiences." className="px-6 pt-6"/>
          <div>
            <Toolbox toolBoxItems={toolBoxItems} className="mt-6"/>
            <Toolbox toolBoxItems={toolBoxItems} className="mt-6" itemWrapperclassName="-translate-x-1/2"/>
          </div>
      </Card>

      <Card>
        <CardHeader title="Beyond the Code" description="Explore my interest and hobbies beyond the digital realm."/>
          <div>
            {hobbies.map((hobby)=>{
              return <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            })}
          </div>
      </Card>
      <Card>
          <Image src={mapImage} alt="map" />  
          <Image src={smileMemoji} alt="smiling memoji"/>
      </Card>
    </div>
    </div>
  </div>;
};
