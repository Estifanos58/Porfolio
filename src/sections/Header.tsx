import email from '@/assets/icons/email.png'
import linkedin from '@/assets/icons/linkedin.png'
import github from '@/assets/icons/github_icon.png'
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex justify-around items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 md:gap-4  p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">Home</a>
        <a href="#project" className="nav-item">Project</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
      <div className=' hidden md:flex gap-4 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <a className=' hover:bg-white/10  p-2 rounded-full' href="">
         <Image src={email} alt="email" width={20} height={20}/>
        </a>
        <a className=' hover:bg-white/10  p-2 rounded-full' href="">
          <Image src={linkedin} alt='LinkedIn' width={20} height={20}/>
        </a>
        <a className=' hover:bg-white/10  p-2 rounded-full' href="">
          <Image src={github} alt='GitHub' width={20} height={20}/>
        </a>
      </div>
    </div>
  );
};
