import memojiImage from '../assets/images/memoji-computer.png';
import ArrawDown from '../assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg';
import SparkelIcon from '@/assets/icons/sparkle.svg'
import Image from 'next/image';
import HeroOrbit from '@/components/HeroOrbit';
import logo from '@/assets/images/Logo.jpg'
import Link from 'next/link';


export const HeroSection = () => {
  return <div id="home" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,black_10%,black_70%,transparent)]'>
    <div className='absolute inset-0 -z-30 opacity-5' style={{backgroundImage: `url(${grainImage.src})`}}></div>
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration='3s'>
    <SparkelIcon className="size-8 text-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
    <SparkelIcon className="size-5 text-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='3s'>
    <div className="size-2 rounded-full bg-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
    <SparkelIcon className="size-10 text-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
    <StarIcon className="size-12 text-emerald-300 "/>
   </HeroOrbit>
   <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
    <StarIcon className="size-8 text-emerald-300 "/>
   </HeroOrbit>
   <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='3s'>
    <div className="size-2 rounded-full bg-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
    <SparkelIcon className="size-14 text-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s' >
    <div className="size-3 rounded-full bg-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='15s'> 
    <StarIcon className="size-28 text-emerald-300"/>
   </HeroOrbit>
   </div>
    <div className="container md:flex items-center justify-center gap-10">
      <div>
        <div className='flex flex-col items-center relative '>
          <Image src={logo} className='size-[200px] rounded-full border-2 border-white/50' alt="Person peeking fro behind laptop"/>
          <div className='bg-gray-950 border absolute top-0 right-0 md:-top-5 md:-right-10 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className='text-sm font-medium font-serif'>Available</div>
          </div>
        </div> 
      </div>

      <div>
        <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl '>Full Stack Web Developer</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>
          I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
        </p>
        </div>
        <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center z-100 relative'>
            <Link href="/Estifanos_Kebede.pdf" download={true}>
              <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
              <span className='font-semibold'>Download CV</span>
              <ArrawDown className='size-4'/>
              </button>
            </Link>
        
        </div>
      </div>
      

      
    </div>
  </div>;
};
